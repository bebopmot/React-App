import { Link } from "react-router-dom";

function ProductCard({ productDetails, callbackToDelete }) {
    const { id, title, price, category, availabilityStatus, description } = productDetails;

    return (
        <div className="card-body">
            <div className="title-and-description">
                <h3>{title}</h3>
                <p>{description}</p>

                <div className="tag-and-price">
                    <div className="tag">
                        <div className="button"><button> <p><strong>Category :</strong> {category}</p></button></div>                </div>
                    <div className="availability">
                        {availabilityStatus === "Out of Stock" ? (
                            <p><strong>Status :</strong>  {availabilityStatus}❌</p>
                        ) : (
                            <p><strong>Status :</strong> {availabilityStatus} ✔️</p>
                        )}
                    </div>
                </div>


                <div className="button"><button><strong> </strong> {price} €</button></div>
            </div>
            <div className="button-container">
                {/*   Lien vers la page de détails */}
                <Link to={`/productdetail/${id}`}>
                    <button>Details</button>
                </Link>

                {/*   Supprimer */}
                <button onClick={() => callbackToDelete(id)}>Delete</button>
            </div>
        </div>
    );
}

export default ProductCard;
