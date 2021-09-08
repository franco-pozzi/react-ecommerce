import { useParams } from "react-router"
import { useState, useEffect } from "react"
import axios from "axios"

import ProductBox from "./ProductBox"


const Category = ({ props, latestProducts }) => {

    const { category_slug } = useParams()

    const [product, setProduct] = useState({ products: [] })

    useEffect(() => {
        axios
            .get(`/api/v1/products/${category_slug}/`)
            .then(response => {
                setProduct(response.data)
            })
            .catch(error => {
                console.log(error);
                setProduct(null)
            })

    }, [category_slug])


    if (!product) return (<div>Nada para mostrar</div>)

    return (
        <section className='section'>
            <div className="page-category">
                <div className="columns is-multiline">
                    <div className="column is-12">
                        <h1 className="is-size has-text-centered">{ category_slug }</h1>
                    </div>
                    {product.products.map((product, index) => <ProductBox key={index} product={product} />)}
                </div>
            </div>
            </section>
    )
}

export default Category
