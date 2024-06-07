import React from 'react'

export default function Navbar(props) {
    return (
        <>
            <div className="navbar">
                <div className="logo">
                    <a href="/"><img src="https://www.battlegroundsmobileindia.com/common/img/common/logo.png" alt="Logo" /></a>
                </div>
                <nav>
                    <ul className="nav-links">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Download</a></li>
                        <li><a href="#">Support</a></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}












