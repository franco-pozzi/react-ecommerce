import Header from "components/Header"
import Footer from "components/Footer"


import { Home } from "pages/Home"
import LogIn from "pages/LogIn"
import MyAccount from "pages/MyAccount"
import Search from "pages/Search"
import Product from "pages/Product"
import Category from "pages/Category"
import CartPage from "pages/CartPage"
import CheckOut from "pages/CheckOut"

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import { useContext } from "react"

import { ProductContextProvider } from "context/ProductContext"
import { CartContextProvider } from "context/CartContext"

import AuthContext from "context/AuthContext"


const Routes = () => {

    const { isAuthenticated } = useContext(AuthContext)

    return (

        <Router>
            <ProductContextProvider>
                <CartContextProvider>

                    <Header />

                    <Switch>
                        <Route exact path='/'>
                            <Home />
                        </Route>

                        <Route exact path='/log-in'>
                            {!isAuthenticated ? <LogIn /> : <Redirect to='/' />}
                        </Route>

                        <Route exact path='/my-account'>
                            {isAuthenticated ? <MyAccount /> : <Redirect to='/log-in' />}
                        </Route>

                        <Route exact path='/search'>
                            <Search />
                        </Route>

                        <Route exact path='/cart'>
                            <CartPage />
                        </Route>

                        <Route exact path='/cart/checkout'>
                            {isAuthenticated ? <CheckOut /> : <Redirect to='/log-in' />}
                        </Route>

                        <Route path='/:category_slug/:product_slug'>
                            <Product />
                        </Route>

                        <Route path='/:category_slug'>
                            <Category />
                        </Route>

                    </Switch>
                    <Footer />
                </CartContextProvider>
            </ProductContextProvider>
        </Router>

    )
}

export default Routes
