import { Routes, Route, Link, NavLink } from "react-router-dom";
import ProductList from "../components/ProductList";
import AddProduct from "./AddProduct";

function DashBoard() {
    return (
        <div className="side-et-product">
            <SideBar />
            <ProductList />
            <AddProduct />
        </div>

    )
}


export default DashBoard;s