import Home from "./components/Home"
import Header from "./components/Header"
import Product from "./components/Product"
import CartPage from "./components/CartPage"
import Category from "./components/Category"
import Footer from "./components/Footer"
import LogIn from "./components/LogIn"
import Search from "./components/Search"

import 'bulma/css/bulma.min.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from 'axios'


const App = () => {
  axios.defaults.baseURL = 'http://127.0.0.1:8000'

  const [latestProducts, setLatestProducts] = useState([])

  useEffect(() => {
    const getLatestProducts = () => {
      axios
        .get('/api/v1/latest-products/')
        .then(response => setLatestProducts(response.data))
        .catch(error => {
          console.log(error)
        })
    }
    getLatestProducts()
  }, [])



  const initializeCart = () => (localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : ({ items: [] }))

  const [cart, setCart] = useState(initializeCart)


  const initializeToken = () => (localStorage.getItem('token') ? localStorage.getItem('token') : '')
  const initializeAuthentication = () => (localStorage.getItem('token') ? true : false)

  const [token, setToken] = useState(initializeToken())

  const [isAuthenticated, setAuthentication] = useState(initializeAuthentication())

  const [isLoading, setIsLoading] = useState(false)

  const [cartTotalLength, setcartTotalLength] = useState()

  useEffect((totalLength) => {
    totalLength = 0

    for (let i = 0; i < cart.items.length; i++) {
      totalLength += cart.items[i].quantity
    }

    setcartTotalLength(totalLength)

    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])



  const addToCart = (item) => {
    const exists = cart.items.filter(i => i.product.id === item.product.id)

    exists.length ? exists[0].quantity = parseInt(exists[0].quantity) + parseInt(item.quantity) : cart.items.push(item)

    localStorage.setItem('cart', JSON.stringify(cart))

    setcartTotalLength(parseInt(cartTotalLength) + parseInt(item.quantity))
  }

  const removeFromCart = (item) => {
    const removed = cart.items.filter(i => i.product.id !== item.product.id)
    removed.length > 0 ? setCart({ items: removed }) : setCart({ items: [] })

    console.log(removed)

  }

  const decrementQuantity = (item) => {

    item.quantity -= 1
    setcartTotalLength(cartTotalLength - 1)
    setCart(cart)
    localStorage.setItem('cart', JSON.stringify(cart))

    if (item.quantity === 0) {
      removeFromCart(item)
    }
  }

  const incrementQuantity = (item) => {

    item.quantity += 1
    setcartTotalLength(cartTotalLength + 1)

    localStorage.setItem('cart', JSON.stringify(cart))

    setCart(cart)
  }
  
  const addToken =  (token) => {
    
    setToken(token)
    setAuthentication(true)
    localStorage.setItem("token", token)
    
  }

  

  return (
    <Router>      
      <Header cartTotalLength={cartTotalLength} isAuthenticated={isAuthenticated} />
      
      <div className={`is-loading-bar has-text-centered  ${isLoading ? 'is-loading' : ''}`}>
        <div className="lds-dual-ring"></div>
      </div>
      
      <Switch>
        <Route exact path='/'>
          <Home latestProducts={latestProducts} />
        </Route>

        <Route exact path='/log-in'>
          <LogIn  addToken={addToken} />
        </Route>

        <Route exact path='/search'>
          <Search setIsLoading={setIsLoading} />
        </Route>

        <Route exact path='/cart'>
          <CartPage cart={cart} removeFromCart={removeFromCart} decrementQuantity={decrementQuantity} incrementQuantity={incrementQuantity} cartTotalLength={cartTotalLength} />
        </Route>

        <Route path='/:category_slug/:product_slug'>
          <Product addToCart={addToCart} />
        </Route>

        <Route path='/:category_slug'>
          <Category latestProducts={latestProducts} />
        </Route>

      </Switch>
      <Footer />
    </Router>
  )
}

export default App
