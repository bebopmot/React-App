import { Routes, Route, Link, NavLink } from "react-router-dom";

function SideBar() {
    return (<div className="SideBar">
        <Link to="/" >   <h3>Products</h3></Link>
        <h3>Add Product</h3>
        <Link to="/about" ><h2>About </h2></Link>

    </div>
    )
}


export default SideBar;