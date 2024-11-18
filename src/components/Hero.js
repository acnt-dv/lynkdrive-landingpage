import React from "react";
import "./Hero.css";
import myWorldImage from '../resources/worldMap.png';

function Hero() {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Decentralized Storage. AI-Powered Efficiency. Empowering the Future of Web3</h1>
                <p className="w-3/4 justify-self-center">Leverage AI-driven performance, privacy-first storage, and decentralized architecture for secure, low-cost storage optimized for Ethereum and EVM-compatible ecosystems</p>
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
