import ProductCard from './ProductCard';

function ProductList({ productsArr, callbackToDelete }) {
    return (
        <section className="product-list">
            <h2>List of Products</h2>

            {productsArr.length === 0 && <p>Aucun produit à afficher.</p>}

            {productsArr.map((productObj) => (
                <ProductCard
                    key={productObj.id}
                    productDetails={productObj}
                    callbackToDelete={callbackToDelete}
                />
            ))}
        </section>
    );
}

export default ProductList;
