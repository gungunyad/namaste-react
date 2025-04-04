import { RES_LOGO } from "../utils/component";
import { useState } from "react";

const Header = () => {
    const [ btnName, setBtnName ] = useState("Login");
    return ( 
    <div className="header">
        <div className="logo">
            <img src={RES_LOGO}/>
        </div>
        <div className="nav-item">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact</li>
                <li>Cart</li>
                <button className="login"
                onClick= {() => {
                    btnName === "Login" 
                       ? setBtnName("Logout")
                       : setBtnName("Login");
                    }}
                >
                    {btnName}
                </button>
            </ul>
        </div>
    </div>
    );
}; 

export default Header;
