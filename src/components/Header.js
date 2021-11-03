import { Link } from 'react-router-dom'
import { MdSearch, MdShoppingCart } from "react-icons/md";

import { useState, useContext } from 'react';

import AuthContext from 'context/AuthContext';
import CartContext from "context/CartContext"



const Header = () => {

    const [showMobileMenu, setShowMobileMenu] = useState(false)

    const { isAuthenticated } = useContext(AuthContext)

    const { cartTotalLength } = useContext( CartContext )
    
    
    
    
    const handleMobileMenu = () => setShowMobileMenu(!showMobileMenu)

    
    const Button = !isAuthenticated ? <Link to="/log-in" className="button is-ligth">Log in </Link> : <Link to="/my-account" className="button is-ligth"> My account </Link>

    return (
        <nav className="navbar is-dark">
            <div className="navbar-brand">
                <Link className="navbar-item" to="/"><strong>Djackets</strong></Link>

                <button aria-label="menu" aria-expanded="false" data-target="navbar-menu" className="navbar-burger" onClick={handleMobileMenu}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </button>
            </div>
            <div className={`navbar-menu  ${showMobileMenu ? 'is-active' : ''}`} id="navbar-menu" >
                <div className="navbar-start">
                    <div className="navbar-item">
                        <form action="/search" method="get">
                            <div className="field has-addons">
                                <div className="control">
                                    <input type="text" className="input" placeholder="What are you looking for?" name="query" />
                                </div>

                                <div className="control">
                                    <button className="button is-success">
                                        <span className="icon">
                                            <MdSearch />
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="navbar-end">
                    <Link className="navbar-item" to="/summer">Summer</Link>
                    <Link className="navbar-item" to="/winter">Winter</Link>

                    <div className="navbar-item">
                        <div className="buttons">

                            { Button }

                            <Link className="button is-success" to="/cart">
                                <span className="icon"><MdShoppingCart /></span>
                                <span>Cart ({cartTotalLength}) </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header
