import products from "../data/products.json";
import { useState } from "react";
import ProductCard from "./ProductCard"; // ✅ nécessaire si tu l'utilises

function ProductList() {
    const [productListDisplay, setProductListDisplay] = useState(products);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const deleteProduct = (productDeletedId) => {
        const newList = productListDisplay.filter((product) => {
            if (product.id !== productDeletedId) {
                return true;
            } else {
                return false;
            }
        });

        setProductListDisplay(newList);
    };




    return (
        <div>
            {productListDisplay.map((productObj) => (
                <ProductCard
                    key={productObj.id}
                    productDetails={productObj}
                    callbackToDelete={deleteProduct}
                />
            ))}





        </div>



    );
}

export default ProductList;


