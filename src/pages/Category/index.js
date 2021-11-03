import { useParams } from "react-router"
import { useState, useEffect } from "react"
import axios from "axios"

import ListOfProducts from "components/ListOfProducts"




const Category = () => {

    const { category_slug } = useParams()

    const [product, setProduct] = useState()

    useEffect(() => {
        axios
            .get(`/api/v1/products/${category_slug}/`)
            .then(response => {
                setProduct(response.data.products)
            })
            .catch(error => {
                console.log(error)
            })

    }, [category_slug])

    if (!product) return (<div>Nada para mostrar</div>)

    

    if (product) return (
        <section className='section'>
            <div className="page-category">
                <div className="columns is-multiline">
                    <div className="column is-12">
                        <h1 className="is-size has-text-centered">{category_slug}</h1>
                    </div>
                    <ListOfProducts products={product} />
                </div>
            </div>
        </section>
    )
}

export default Category