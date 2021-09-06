import { Link } from 'react-router-dom'


const ProductBox = ({ product }) => {

    return (
        <div className="column is-3">
            <div className="box">
                <figure className="image mb-4">
                    <img src={product.get_thumbnail} alt='' />
                </figure>

                <h3 className="is-size-4">{product.name}</h3>
                <p className="is-size-6 has-text-grey">$ {product.price}</p>

                <Link to={product.get_absolute_url} className="button is-dark mt-4">View details</Link>
            </div>
        </div>
    )
}

export default ProductBox
