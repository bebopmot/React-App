import React from "react";
import "./Navbar.css";

function ProductCard(props) {
    const product = props.productDetails;

    return (
        <div className="card-body">
            <div className="title-and-description">
                <h2>{product.title}</h2>
                <p>{product.description}</p>
            </div>

            <div className="tag-and-price">
                <h3>{product.category}</h3>

                <span className="product-price">
                    <h3>{product.price} $</h3>
                </span>

                {product.availabilityStatus === "Out of Stock" ? (
                    <p>❌</p>
                ) : (
                    <p>✔️</p>
                )}
            </div>

            <p>
                <button onClick={() => props.callbackToDelete(product.id)}>
                    Delete
                </button>
            </p>
        </div>
    );
}

export default ProductCard;
