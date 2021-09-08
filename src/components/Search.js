import ProductBox from "./ProductBox"

import { useEffect, useState } from "react"
import axios from "axios"


const Search = ({ setIsLoading }) => {

    const [query, setQuery] = useState()

    const [product, setProduct] = useState()

    const performSearch = async () => {

        setIsLoading(true)

        await axios
            .post('/api/v1/products/search/', { 'query': query })
            .then(response => {
                setProduct(response.data)
            })
            .catch(error => {
                console.log(error)
            })

        setIsLoading(false)
    }

    useEffect(() => {
        document.title = 'Search | Djackets'

        const uri = window.location.search.substring(1)
        const params = new URLSearchParams(uri)

        if (params.get('query')) {
            setQuery(params.get('query'))
        }

        performSearch()
    }, [query])


    if (!product) return (<> No hay productos para mostrar</>)

    return (
        <section className="section">
            <div className="page-search">
                <div className="columns is-multiline">
                    <div className="column is-12">
                        <h1 className="title">Search</h1>
                        <h2 className="is-size-5 has-text-grey">Search term: "{query}"</h2>
                    </div>

                    {product.length > 0 ? (product.map((product, index) => <ProductBox key={index} product={product} />)) : (<h2 className="is-size-5 has-text-grey">No se han encontrado productos</h2>)}
                </div>
            </div>
        </section>
    )
}

export default Search
