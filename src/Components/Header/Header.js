import React from "react";
import logo from '../../Assets/icon.svg'
import './Header.css';

function Header(){
    return(
        // <div className="Header">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
        // </div>
    );
}

export default Header;