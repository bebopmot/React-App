import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function ProductCard(props) {
    const product = props.productDetails;

    return (
        <div className="card-body">

            <div className="title-and-description">
                <h2>{product.title}</h2>
                <p>{product.description}</p>
            </div>

            <div className="tag-and-price">
                <div className="tag">
                    <h3>{product.category}</h3>
                </div>
                <div className="availability">
                    {product.availabilityStatus === "Out of Stock" ? (
                        <p>❌</p>
                    ) : (
                        <p>✔️</p>
                    )}
                </div>
            </div>

            <div className="button-container">
                <span className="product-price">
                    <h3>{product.price} $</h3>
                </span>

                <div className="actions">
                    <button onClick={() => props.callbackToDelete(product.id)}>
                        Delete
                    </button>

                    <Link to={`/productdetail/${product.id}`}>
                        <button>Details</button>
                    </Link>
                </div>
            </div>
        </div>

    );
}

export default ProductCard;
