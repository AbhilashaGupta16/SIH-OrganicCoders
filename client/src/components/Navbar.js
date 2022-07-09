import React from "react";
import "../styles/Navbar.css";
const Navbar = () => {
    return(
        <nav className="nav">
            <div className="navbar">
                <span className="website-name">adipcochlearimplant</span>
                <div>
                    <span >Home</span>
                    <span >Theme</span>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;