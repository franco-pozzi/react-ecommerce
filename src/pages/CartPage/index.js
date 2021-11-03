

import { Link } from "react-router-dom"
import CartItem from "components/CartItem"

import { useContext } from "react"
import CartContext from "context/CartContext"

const CartPage = () => {

    const { cart, cartTotalPrice, cartTotalLength } = useContext(CartContext)

    const cartTableBody = cart.items.map((item) => (<CartItem key={item.product.id} item={item} />))


    return (
        <div className="section page-cart">
            <div className="columns is-multiline">
                <div className="column is-12">
                    <h1 className="title">Cart</h1>
                </div>

                <div className="column is-12 box">
                    <table className="table is-fullwidth">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            {cartTableBody}
                        </tbody>

                    </table>

                    {cart.items.length === 0 && <p>You don't have any product in your cart...</p>}
                </div>

                {cart.items.length !== 0 &&
                    <div className="column is-12 box">
                        <h2 className="subtitle">Summary</h2>

                        <strong>${cartTotalPrice}</strong>, {cartTotalLength} items

                        <hr />

                        <Link className="button is-dark" to="/cart/checkout">Proceed to checkout</Link>
                    </div>
                }
            </div>
        </div>
    )
}

export default CartPage
