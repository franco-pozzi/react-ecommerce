import { createContext, useState, useEffect } from "react"
import axios from "axios"


const ProductContext = createContext('Sin Provider')

export function ProductContextProvider({ children }) {

    const [latestProducts, setLatestProducts] = useState([])

    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        axios
            .get('/api/v1/latest-products/')
            .then(response => {
                setLatestProducts(response.data)
                setIsLoading(false)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])


    return (
        <ProductContext.Provider value={{ latestProducts, isLoading }}>
            {children}
        </ProductContext.Provider>
    )
}


export default ProductContext