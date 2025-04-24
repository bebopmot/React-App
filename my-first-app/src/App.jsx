import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import products from "./data/products.json"

import ProductList from "./components/ProductList"
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import SideBar from './components/SideBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <NavBar />
      </header>

      <div className="side-et-product">
        <SideBar />
        <ProductList />
      </div>

      <aside>

      </aside>

      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
