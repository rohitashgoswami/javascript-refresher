import React from 'react'

export default function Navbar(props) { 
    return (
        <div>
            <nav className="navbar">
                <div className="logo">
                    <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1647490619965/P1dsNgj-f1.png" alt="Logo" />
                </div>
                <div className="nav-items">
                    <ul>
                        <li><a href="/">{props.homeText}</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Services</a></li>
                        <li><a href="/">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}












