import React from "react";
import "./Features.css";

function Features() {
    return (
        <section className="features">
            <h2>Why Choose LynkDrive?</h2>
            <div className="feature-grid">
                <div className="feature-item">
                    <h3>Decentralized Storage</h3>
                    <p>No single point of failure. Data is stored across multiple nodes globally.</p>
                </div>
                <div className="feature-item">
                    <h3>Blockchain-Based Security</h3>
                    <p>Immutable and secure with full encryption and transparency.</p>
                </div>
                <div className="feature-item">
                    <h3>Earn with LYND</h3>
                    <p>Host a storage node and earn LYND tokens.</p>
                </div>
            </div>
        </section>
    );
}

export default Features;
