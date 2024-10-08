import React from "react";
import "./Hero.css";
import myWorldImage from './worldMap.png';

function Hero() {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>LynkDrive: Secure, Decentralized Cloud Storage Powered by Blockchain</h1>
                <p>Own Your Data. No Centralized Authority. Globally Distributed, Secure, and Efficient.</p>
                <div className="hero-buttons">
                    <button className="primary-btn">Start Storing</button>
                    <button className="secondary-btn">Learn More</button>
                </div>
            </div>
            <div className="hero-map">
                {/* Placeholder for the 3D Map */}
                <img src={myWorldImage} alt="Map showing nodes" />
            </div>
        </section>
    );
}

export default Hero;
