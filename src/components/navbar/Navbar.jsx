import React from "react";
import './Navbar.css';
import BasicSwitches from "./ThemeSwitch";


function Navbar() {

    return (
        <div className="navbar">
            <nav>
                <h2 id="name"> Kelvin Nana Gyebi</h2>
                <div className="nav-links">
                    <a href="#about" className="nav-link">About</a>
                    <a href="#projects" className="nav-link">Projects</a>
                    {/* <a href="#experiences" className="nav-link">Experiences</a> */}
                    <a href="https://drive.google.com/file/d/1NY1oV_hcPysFYqivVVEccYmhhhzubZ-g/view?usp=sharing" className="nav-link" target="_blank" rel="noreferrer">
                        Resume
                    </a>
                    <BasicSwitches />
                </div>
            </nav>
        </div>
    );
}
export default Navbar;