import { Link } from 'react-router-dom'


const CartItem = ({ item, removeFromCart, decrementQuantity, incrementQuantity }) => {

    const getItemTotal = (item) => {
        return item.quantity * item.product.price
    }
    
    return (
        <tr>
            <td>
                <Link to={item.product.get_absolute_url}>   {item.product.name}             </Link>
            </td>
            <td>
                $ {item.product.price}
            </td>
            <td>
                {item.quantity}
                <a onClick={() => decrementQuantity(item)}>-</a>
                <a onClick={() => incrementQuantity(item)}>+</a>
            </td>
            <td>
                ${getItemTotal(item).toFixed(2)}
            </td>
            <td>
                <button className="delete" onClick={() => removeFromCart(item)}></button>
            </td>
        </tr>


    )
}

export default CartItem
