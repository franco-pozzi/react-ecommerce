import { useEffect, useState } from "react"
import axios from "axios"
import { toast } from "bulma-toast"
import { useParams } from "react-router"




const Product = ({ addToCart }) => {


    const { category_slug, product_slug } = useParams()

    const [product, setProduct] = useState('')

    useEffect(() => {
        axios
            .get(`/api/v1/products/${category_slug}/${product_slug}/`)
            .then(response => {
                setProduct(response.data)
            })
            .catch(error => {
                console.log(error);
                setProduct(null)
            })

    }, [category_slug, product_slug])

      
    const [quantity, setQuantity] = useState(1)

    if (!product) return (<div>Nada para mostrar</div>)

    const addProductToCart = () => {

        if (isNaN(quantity) || quantity < 1) {
            setQuantity(1)
        }

        const item = {
            product: product,
            quantity: quantity
        }

        addToCart(item)

        toast({
            message: 'The product was added to the cart',
            type: 'is-success',
            dismissible: true,
            pauseOnHover: true,
            duration: 2000,
            position: 'bottom-right',
        })
    }   

    document.title = product.name + '| Djackets'

    return (
        <section className='section'>
            <div className="page-product">
                <div className="columns is-multiline">
                    <div className="column is-9">
                        <figure className="mb-6">
                            <img src={product.get_image} alt='' />
                        </figure>

                        <h1 className="title">{product.name}</h1>

                        <p>{product.description}</p>
                    </div>

                    <div className="column is-3">
                        <h2 className="subtitle">Information</h2>

                        <p><strong>Price: </strong>${product.price}</p>

                        <div className="field has-addons mt-6">
                            <div className="control">
                                <input type="number" className="input" min="1" placeholder='Ej: 1' onChange={(e) => setQuantity(parseInt(e.target.value))} />
                            </div>

                            <div className="control">
                                <button className="button is-dark" onClick={addProductToCart}>Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Product
