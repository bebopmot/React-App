import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

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
    
     <aside>
      <SideBar />
     </aside>
     <footer>
     <Footer />
     </footer>
    </>
  )
}

export default App
