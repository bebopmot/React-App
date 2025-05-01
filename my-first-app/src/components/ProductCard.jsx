import { Link } from "react-router-dom";

function ProductCard({ productDetails, callbackToDelete }) {
    const { id, title, price, category, availabilityStatus, description, images } = productDetails;

    return (
        <div className="card-body">
            <div className="text-image-container">
                <div className="image-container">
                    <img className="image" src={images} alt={title} />
                </div>
                <div className="text-container">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </div>

            <div className="price-and-avail">
                <div className="price-button">{price} €</div>
                <div className="availability">
                    {availabilityStatus === "Out of Stock"
                        ? `${availabilityStatus} ❌`
                        : availabilityStatus === "Low Stock"
                            ? `${availabilityStatus} ⚠️`
                            : `${availabilityStatus} ✅`}
                </div>
            </div>

            <div className="button-container">
                <Link to={`/productdetail/${id}`}>
                    <button className="button-detail">Details</button>
                </Link>
                <button className="button-delete" onClick={() => callbackToDelete(id)}>
                    Delete
                </button>
            </div>
        </div>

    );
}

export default ProductCard;
