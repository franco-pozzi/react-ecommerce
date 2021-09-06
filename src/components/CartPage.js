import CartItem from "./CartItem"
import { Link } from "react-router-dom"


const CartPage = ({ cart, removeFromCart, decrementQuantity, incrementQuantity, cartTotalLength }) => {

    const cartTotalPrice = (cart.items.reduce ((acc, curVal) => {return acc += curVal.product.price * curVal.quantity}, 0))
    
    
    
    
    return (
        <div className="section page-cart">
            <div className="columns is-multiline">
                <div className="column is-12">
                    <h1 className="title">Cart</h1>
                </div>

                <div className="column is-12 box">
                    <table className="table is-fullwidth" v-if="cartTotalLength">
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
                            {cart.items.map((item, index) => (<CartItem key={index} item={item} decrementQuantity={decrementQuantity} removeFromCart={removeFromCart} incrementQuantity={incrementQuantity}/>))}
                        </tbody>

                    </table>

                    {cart.items.length === 0 && <p>You don't have any product in your cart...</p>}
                </div>

                <div className="column is-12 box">
                    <h2 className="subtitle">Summary</h2>

                    <strong>${cartTotalPrice}</strong>, {cartTotalLength} items

                    <hr />

                    <Link className="button is-dark" to="/cart/checkout">Proceed to checkout</Link>
                </div>
            </div>


        </div>
    )
}

export default CartPage
