import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar.jsx";
import { Footer } from "../components/Footer/Footer.jsx";

export const Layout = () => {
    return (
        <div className="site-wrapper">
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
        
    )
}