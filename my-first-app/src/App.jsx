import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import productsData from './data/products.json';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import SideBar from './components/Sidebar';
import ProductList from './components/ProductList';
import ProductCard from './components/ProductCard';
import ProductDetailPage from './pages/ProductDetailPage';
import AddProduct from './pages/AddProduct';
import About from './pages/About';



function App() {
  const [productList, setProductList] = useState(productsData);

  const createProduct = (newProductDetails) => {
    const ids = productList.map(p => p.id);
    const maxId = Math.max(...ids);
    const nextId = maxId + 1;

    const newProduct = {
      ...newProductDetails,
      id: nextId,
    };

    setProductList([newProduct, ...productList]);
  };

  const deleteProduct = (productToDeleteId) => {
    const newList = productList.filter((product) => product.id !== productToDeleteId);
    setProductList(newList);
  };

  return (
    <>
      <header><NavBar /></header>

      <div className="content-wrapper">
        <SideBar />
        <main className="main-content">
          <Routes>  <Route path="/"
            element={
              <ProductList
                productsArr={productList}
                callbackToDelete={deleteProduct}
              />
            }
          />
            <Route
              path="/addProduct"
              element={<AddProduct callbackToCreate={createProduct} />}
            />
            <Route
              path="/productdetail/:productId"
              element={<ProductDetailPage productsArr={productList} />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/productcard" element={<ProductCard />} />
            <Route path="*" element={<h1>Page Not Found</h1>} />
          </Routes>
        </main>
      </div>

      <footer><Footer /></footer>
    </>
  );
}

export default App;
