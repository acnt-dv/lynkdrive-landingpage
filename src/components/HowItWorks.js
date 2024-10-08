import React from "react";
import "./HowItWorks.css";

function HowItWorks() {
    return (
        <section className="how-it-works">
            <h2>How LynkDrive Works</h2>
            <div className="steps">
                <div className="step">
                    <h3>Upload Your Files</h3>
                    <p>Securely upload your files with end-to-end encryption.</p>
                </div>
                <div className="step">
                    <h3>Nodes Distribute Data</h3>
                    <p>Your files are split, encrypted, and stored across decentralized nodes.</p>
                </div>
                <div className="step">
                    <h3>Earn LYND Tokens</h3>
                    <p>Contribute storage space and earn LYND tokens.</p>
                </div>
            </div>
        </section>
    );
}

export default HowItWorks;
