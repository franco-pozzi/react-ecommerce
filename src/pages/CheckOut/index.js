import CartContext from "context/CartContext"
import CartItem from "components/CartItem"

import { useContext, useState } from "react"
import { Link } from "react-router-dom"


const CheckOut = () => {

    const { cart, cartTotalLength, cartTotalPrice } = useContext(CartContext)


    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [zipcode, setZipCode] = useState('')
    const [place, setPlace] = useState('')
    const [errors, setErrors] = useState([])



    function submitFormHandler()  {
        setErrors([])

        first_name === '' && setErrors(errors => [...errors, 'The first name field is missing'])

        last_name === '' && setErrors(errors => [...errors, 'The last name field is missing'])

        email === '' && setErrors(errors => [...errors, 'The email field is missing'])

        phone === '' && setErrors(errors => [...errors, 'The phone field is missing'])

        address === '' && setErrors(errors => [...errors, 'The address field is missing'])

        place === '' && setErrors(errors => [...errors, 'The place field is missing'])

        zipcode === '' && setErrors(errors => [...errors, 'The zipcode field is missing'])
    }

    function submitForm() {

        submitFormHandler()

        console.log(errors)

    }



    const cartBody = cart.items.length > 0 && cart.items.map((item, key) => (<CartItem key={key} item={item} />))

    const errorPopUp = errors.length > 0 && (
        <div className="notification is-danger mt-4">
            {errors.map((error, key) => <p key={key}>{error}</p>)}
        </div>
    )


    if (cart.items.length < 1) return (
        <section className="section page-checkout">
            <div className="columns is-multiline">
                <div className="column is-12">
                    <h1 className="title">Checkout</h1>
                </div>
                <div className="column is-12">
                    <h2 className="title">No items in cart</h2>
                    <Link to='/' className="button is-ligth" >Go back to Home</Link>
                </div>
            </div>
        </section>
    )

    return (
        <section className="section page-checkout">
            <div className="columns is-multiline">
                <div className="column is-12">
                    <h1 className="title">Checkout</h1>
                </div>

                <div className="column is-12 box">
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
                            {cartBody}
                        </tbody>

                        <tfoot>
                            <tr>
                                <td colSpan="2">Total</td>
                                <td>{cartTotalLength}</td>
                                <td>$ {cartTotalPrice.toFixed(2)}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>

                <div className="column is-12 box">
                    <h2 className="subtitle">Shipping details</h2>

                    <p className="has-text-grey mb-4">* All fields are required</p>

                    <div className="columns is-multiline">
                        <div className="column is-6">
                            <div className="field">
                                <label>First name*</label>
                                <div className="control">
                                    <input type="text" className="input" value={first_name} onChange={(e) => setFirstName(e.target.value)} />
                                </div>
                            </div>

                            <div className="field">
                                <label>Last name*</label>
                                <div className="control">
                                    <input type="text" className="input" value={last_name} onChange={(e) => setLastName(e.target.value)} />
                                </div>
                            </div>

                            <div className="field">
                                <label>E-mail*</label>
                                <div className="control">
                                    <input type="email" className="input" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                            </div>

                            <div className="field">
                                <label>Phone*</label>
                                <div className="control">
                                    <input type="text" className="input" model="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                                </div>
                            </div>
                        </div>

                        <div className="column is-6">
                            <div className="field">
                                <label>Address*</label>
                                <div className="control">
                                    <input type="text" className="input" value={address} onChange={(e) => setAddress(e.target.value)} />
                                </div>
                            </div>

                            <div className="field">
                                <label>Zip code*</label>
                                <div className="control">
                                    <input type="text" className="input" value={zipcode} onChange={(e) => setZipCode(e.target.value)} />
                                </div>
                            </div>

                            <div className="field">
                                <label>Place*</label>
                                <div className="control">
                                    <input type="email" className="input" value={place} onChange={(e) => setPlace(e.target.value)} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr />

                    <hr />

                    {errorPopUp}

                    <hr />

                    <button className="button is-dark" onClick={() => submitForm()} >Pay with Stripe</button>

                </div>
            </div>
        </section>
    )
}

export default CheckOut
