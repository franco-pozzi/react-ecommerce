import axios from "axios"

import { useEffect, useState, useContext } from "react"

import OrderSummary from "components/OrderSummary"

import AuthContext from "context/AuthContext"


const MyAccount = () => {

    const {removeToken} = useContext(AuthContext)    

    const [orders, setOrders] = useState([])

    useEffect(() => {
        document.title = 'My account | Djackets'

        axios
            .get('/api/v1/orders/')
            .then(response => {
                setOrders(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    
    const logOut = () => {
        removeToken()        
    }
   
    
    return (
        <section className="section page-my-account">
            <div className="columns is-multiline">
                <div className="column is-12">
                    <h1 className="title">My account</h1>
                </div>

                <div className="column is-12">
                    <button className="button is-danger" onClick={logOut} >Log Out</button>
                </div>

                <hr />

                <div className="column is-12">
                    <h2 className="subtitle">My orders</h2>

                    {orders.length > 0 && orders.map((order) => <OrderSummary key={order.id} order={order} />)}
                </div>
            </div>
        </section>
    )
}

export default MyAccount
