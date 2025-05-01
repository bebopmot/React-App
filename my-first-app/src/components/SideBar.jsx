import { Routes, Route, Link, NavLink } from "react-router-dom";

function SideBar() {
    return (<div className="SideBar">
        <Link to="/" className="sidebar-link">   <h3>Products</h3></Link>
        <Link to="/addProduct" className="sidebar-link"><h3>Add Product</h3></Link>
        <Link to="/about" className="sidebar-link"><h3>About </h3></Link>

    </div>
    )
}


export default SideBar;