import { useState } from 'react'
import ProductDetailPage from "./pages/ProductDetailPage"
import products from "./data/products.json"
import ProductCard from "./components/ProductCard"
import ProductList from "./components/ProductList"
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import SideBar from './components/SideBar'
import About from './pages/About'
import { Route, Routes } from "react-router-dom";


function App() {


  return (
    <>
      <header>
        <NavBar />
      </header>
      <div className="content-wrapper">
        <SideBar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/productcard" element={<ProductCard />} />
            <Route path="/about" element={<About />} />
            <Route path="/productdetail/:productId" element={<ProductDetailPage />} />
            <Route path="*" element={<h1>Page Not Found</h1>} />
          </Routes>
        </main>
      </div>



      <footer>
        <Footer />
      </footer>



    </>
  )
}

export default App


