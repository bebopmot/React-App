import ProductCard from "./ProductCard";
function ProductList({ productsArr, callbackToDelete }) {
  return (
    <div>
      {productsArr.map((productObj) => (
        <ProductCard
          key={productObj.id}
          productDetails={productObj}
          callbackToDelete={callbackToDelete}
        />
      ))}
    </div>
  );
}
export default ProductList;