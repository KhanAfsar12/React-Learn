import Navbar from "../Navbar";
import Home from "./Home";
import Contact from "./Contact";
import { Outlet } from "react-router-dom";
const Layout = () => {
    return <>
    <Navbar />
    <Outlet />
    </>
};
export default Layout;