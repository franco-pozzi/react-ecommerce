import ProductBox from "./ProductBox"


const ListOfProducts = ({ products }) => {

    return products.map((product) =>
        <ProductBox
            key={product.id}
            product={product}
        />)

}

export default ListOfProducts
