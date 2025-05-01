import { useParams } from "react-router-dom";
import products from "../data/products.json";

function ProductDetailPage() {
    const { productId } = useParams(); // 👈 récupère l'id dans l'URL

    const product = products.find((productObj) => productObj.id === Number(productId));


    return (
        <div>
            <h2>{product.name}</h2>
            <p>Price : {product.price} €</p>

            <p>Description : {product.description}</p>
            <p>Category : {product.category}</p>
            <p>Price : {product.price}</p>
            <p>Rating : {product.rating}</p>
            <p>brand : {product.brand}</p>
            <p>weight : {product.weight}</p>
            <p>Shipping Information : {product.shippingInformation}</p>

        </div>
    );
}

export default ProductDetailPage;