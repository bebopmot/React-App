import { Routes, Route, Link, NavLink } from "react-router-dom";
import ProductList from "../components/ProductList";

function DashBoard() {
    return (
        <div className="side-et-product">
            <SideBar />
            <ProductList />
        </div>

    )
}


export default DashBoard;