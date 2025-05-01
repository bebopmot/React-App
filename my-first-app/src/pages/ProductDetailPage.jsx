import { useParams } from "react-router-dom";
import products from "../data/products.json";

function ProductDetailPage() {
    const { productId } = useParams();
    const product = products.find((productObj) => productObj.id === Number(productId));

    return (
        <div className="card-body">
            <div className="text-image-container">
                <div className="image-container">
                    <img className="image" src={product.images} alt={product.title} />
                </div>

                <div className="text-container">
                    <h2>{product.title}</h2>
                    <div className="description-center">
                        <p><strong>Description :</strong></p>
                        <p>{product.description}</p>
                    </div>
                </div>
            </div>

            <div className="button-container">
                <p><strong>Price :</strong> {product.price} €</p>
                <p><strong>Category :</strong> {product.category}</p>
                <p><strong>Rating :</strong> {product.rating}</p>
                <p><strong>Brand :</strong> {product.brand}</p>
                <p><strong>Weight :</strong> {product.weight} g</p>
                <p><strong>Shipping Information :</strong> {product.shippingInformation}</p>
            </div>
        </div>
    );
}

export default ProductDetailPage;
