const OrderSummary = ({ order }) => {  



    return (
        <div className="box mb-4">
            <h3 className="is-size-4 mb-6">Order #{order.id}</h3>

            <h4 className="is-size-5">Products</h4>

            <table className="table is-fullwidth">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                </thead>

                <tbody>
                    {order.items.length > 0 && (
                        <tr>
                            <td>{order.items.product.name}</td>
                            <td>{order.items.product.price}</td>
                            <td>{order.items.quantity}</td> 
                            <td>${order.items.quantity * order.items.product.price}</td> 
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default OrderSummary
