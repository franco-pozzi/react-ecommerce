import { createContext, useState, useEffect } from "react"



const CartContext = createContext('sin provider')

export function CartContextProvider({ children }) {

    const initializeCart = () => (localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : ({ items: [] }))

    const [cart, setCart] = useState(initializeCart)

    const [cartTotalLength, setcartTotalLength] = useState()

    useEffect(() => {
        let totalLength = 0

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

        const newCart = { items: removed }

        setCart(newCart)

        localStorage.setItem('cart', JSON.stringify(cart))

    }

    const decrementQuantity = (item) => {

        const itemDecrementQuantity = cart.items.filter(i => i.product.id === item.product.id)

        itemDecrementQuantity[0].quantity -= 1

        setcartTotalLength(cartTotalLength - 1)

        localStorage.setItem('cart', JSON.stringify(cart))

        setCart(cart)

        itemDecrementQuantity[0].quantity === 0 && removeFromCart(item)
    }

    const incrementQuantity = (item) => {

        const itemIncrementQuantity = cart.items.filter(i => i.product.id === item.product.id)

        itemIncrementQuantity[0].quantity += 1

        setcartTotalLength(cartTotalLength + 1)

        localStorage.setItem('cart', JSON.stringify(cart))

        setCart(cart)
    }

    const cartTotalPrice = (cart.items.reduce((acc, curVal) => { return acc += curVal.product.price * curVal.quantity }, 0))



    return (
        <CartContext.Provider value={{ cart, setCart, cartTotalLength, setcartTotalLength, addToCart, removeFromCart, decrementQuantity, incrementQuantity, cartTotalPrice }}>
            {children}
        </CartContext.Provider>
    )
}


export default CartContext