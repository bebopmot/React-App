import { useParams } from "react-router-dom";
import products from "../data/products.json";

function ProductDetailPage() {
    const { productId } = useParams();

    const product = products.find((productObj) => productObj.id === Number(productId));


    return (
        <div className="card-body">
            <img src={product.images} />
            <h2>{product.title}</h2>
            <p> <strong>Price : </strong>{product.price} €</p>
            <p><strong>Category : </strong>{product.category}</p>
            <div className="description-center">
                <p><strong>Description :</strong></p>
                <p>{product.description}</p>
            </div>
            <p><strong>Rating :</strong> {product.rating}</p>
            <p><strong>brand :</strong> {product.brand}</p>
            <p><strong>weight : </strong>{product.weight} g</p>
            <p><strong>Shipping Information :</strong> {product.shippingInformation}</p>

        </div >
    );
}

export default ProductDetailPage;