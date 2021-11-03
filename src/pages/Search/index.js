import useSearch from "hooks/useSearch"

import LoadingGif from "components/LoadingGif"
import ListOfProducts from "components/ListOfProducts"



const Search = () => {

    const { isLoading, product, query } = useSearch()

    const ProductRender = product.length > 0 ? <ListOfProducts products={product} /> : <h2 className="is-size-5 has-text-grey">No se han encontrado productos</h2>


    if (isLoading) return <LoadingGif />

    return (
        <section className="section">
            <div className="page-search">
                <div className="columns is-multiline">
                    <div className="column is-12">
                        <h1 className="title">Search</h1>
                        <h2 className="is-size-5 has-text-grey">Search term: "{query}"</h2>
                    </div>

                    {ProductRender}
                </div>
            </div>
        </section>
    )
}

export default Search
