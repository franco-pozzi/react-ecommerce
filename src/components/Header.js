import { Link } from 'react-router-dom'

const Header = ({cartTotalLength}) => {

    


    return (
        <nav className="navbar is-dark">
            <div className="navbar-brand">
                <Link className="navbar-item" to="/"><strong>Djackets</strong></Link>

                <button aria-label="menu" aria-expanded="false" data-target="navbar-menu" className="navbar-burger" >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </button>
            </div>
            <div className="navbar-menu" id="navbar-menu">
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
                                            <i className="fas fa-search"></i>
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
                            <Link className="button is-success" to="/cart">
                                <span className="icon"><i className="fas fa-shopping-cart"></i></span>
                                <span>Cart {cartTotalLength > 0 && cartTotalLength}</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header
