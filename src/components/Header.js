import React from "react";
import "./Header.css";

function Header() {
    return (
        <header className="header">
            <div className="logo">LynkDrive</div>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Features</li>
                    <li>Token (LYND)</li>
                    <li>How It Works</li>
                    <li>Roadmap</li>
                    <li>Community</li>
                    <li>Contact Us</li>
                </ul>
            </nav>
            <button className="cta-button">Get Started</button>
        </header>
    );
}

export default Header;
