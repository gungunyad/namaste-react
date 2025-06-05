import { RES_LOGO } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [ btnName, setBtnName ] = useState("Login");

    const onlineStatus = useOnlineStatus();
    
    return ( 
    <div className="flex bg-fuchsia-400 justify-between sm:bg-gray-300">
        <div className="logo-container">
            <img className="w-30 h-30 rounded-4xl" src={RES_LOGO}/>
        </div>
        <div className="flex items-center font-bold text-xl ">
            <ul className="flex m-4 p-4">
                <li className="px-4">
                    Online Status : { onlineStatus ? "✅" : "🔴" }
                </li>
                <li className="px-4">
                    <Link to="/">Home </Link>
                </li>
                <li className="px-4">
                    <Link to="/about">About Us</Link>
                </li>
                <li className="px-4">
                    <Link to="/contact">Contact</Link>
                </li>
                <li className="px-4">
                    <Link to="/grocery">Grocery</Link>
                </li>
                <li className="px-4">Cart</li>
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
