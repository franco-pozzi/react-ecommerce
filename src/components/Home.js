import ProductBox from "./ProductBox"

const Home = ({latestProducts}) => {
    
    document.title = 'Home | Djackets '
    
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

                    {latestProducts.map((product, index) => <ProductBox key={index} product={product} />)}
                </div>
            </div>
        </section>
    )
}

export default Home
