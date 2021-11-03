import { useContext } from "react"
import ProductContext from "context/ProductContext"

import ListOfProducts from "components/ListOfProducts"
import LoadingGif from "components/LoadingGif"


export function Home() {

    document.title = 'Home | Djackets '

    const {latestProducts, isLoading} = useContext(ProductContext)
    
    if (isLoading) return <LoadingGif />

    return (
        <section className="section">
            <div className="home">
                <section className="hero is-medium is-dark mb-6">
                    <div className="hero-body has-text-centered">
                        <p className="title mb-6">
                            Welcome to Djacket
                        </p>
                        <p className="subtitle">
                            The best jacket store Online
                        </p>
                    </div>
                </section>

                <div className="columns is-multiline">
                    <div className="column is-12">
                        <h2 className="is-size-2 has-text-centered">Latest products</h2>
                    </div>

                    <ListOfProducts products={latestProducts} />
                </div>
            </div>
        </section>
    )
}