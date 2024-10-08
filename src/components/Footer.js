import React from "react";
import { FaTwitter, FaLinkedin, FaDiscord, FaGithub } from "react-icons/fa";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-logo">LynkDrive</div>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Tokenomics</li>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                </ul>
            </nav>
            <div className="social-icons">
                <FaTwitter />
                <FaLinkedin />
                <FaDiscord />
                <FaGithub />
            </div>
            <p>Contact us: support@lynkdrive.com</p>
        </footer>
    );
}

export default Footer;
