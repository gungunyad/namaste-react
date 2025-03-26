import { RES_LOGO } from "./utils/component";

const Header = () => {
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
            </ul>
        </div>
    </div>
    );
}; 

export default Header;
