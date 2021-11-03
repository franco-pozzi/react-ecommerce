import { useState, useEffect } from "react"
import axios from "axios"

const useSearch = () => {

    const [query, setQuery] = useState()

    const [isLoading, setIsLoading] = useState(false)

    const [product, setProduct] = useState({})

    const url = window.location.search.substring(1)
    const params = new URLSearchParams(url)    

    useEffect(() => {

        if (params.get('query')) {
            setQuery(params.get('query'))
        }

        setIsLoading(true)
        query && axios
            .post('/api/v1/products/search/', { 'query': query })
            .then(response => {
                setProduct(response.data)
                setIsLoading(false)
            })
            .catch(error => {
                console.log(error)
            })
    }, [query])

    return { isLoading, product, query }
}

export default useSearch
