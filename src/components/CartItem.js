import { Link } from 'react-router-dom'

import { useContext } from "react"
import CartContext from "context/CartContext"



const CartItem = ({ item }) => {

    const getItemTotal = (item) => {
        return item.quantity * item.product.price
    }

    const { decrementQuantity, incrementQuantity, removeFromCart } = useContext(CartContext)

    return (
        <tr>
            <td>
                <Link to={item.product.get_absolute_url}>   {item.product.name}   </Link>
            </td>
            <td>
                $ {item.product.price}
            </td>
            <td>
                <button className='button is-link is-small' onClick={() => decrementQuantity(item)}> - </button>
                &nbsp;
                &nbsp;

                {item.quantity}
                &nbsp;
                &nbsp;

                <button className='button is-link is-small' onClick={() => incrementQuantity(item)}>+</button>
            </td>
            <td>
                $ {getItemTotal(item).toFixed(2)}
            </td>
            <td>
                <button className="delete" onClick={() => removeFromCart(item)}></button>
            </td>
        </tr>


    )
}

export default CartItem
