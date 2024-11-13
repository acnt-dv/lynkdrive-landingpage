import React from "react";
import "./WhyChoose.css";

function WhyChoose() {
    return (
        <section className="why-choose">
            <h2 className="my-4 text-3xl">Why Choose LynkDrive?</h2>
            <div className="steps">
                <div className="step">
                    <h3 className="text-lg mb-4">Decentralized & Secure by Design</h3>
                    <p className="text-xs text-justify">Unlike traditional cloud storage platforms, LynkDrive utilizes
                        blockchain technology to decentralize data storage. This means your data is encrypted,
                        fragmented, and spread across multiple nodes, ensuring no single point of failure and unmatched
                        security.</p>
                </div>
                <div className="step">
                    <h3 className="text-lg mb-4">Earn LYND Tokens for Your Contribution</h3>
                    <p className="text-xs text-justify">Contribute your unused storage capacity to the LynkDrive network
                        and receive LYND tokens in return. These tokens not only give you access to premium services but
                        also let you participate in governance decisions and future rewards.</p>
                </div>
                <div className="step">
                    <h3 className="text-lg mb-4">AI-Driven Optimization & Cost-Efficiency</h3>
                    <p className="text-xs text-justify">With AI-powered enhancements, LynkDrive optimizes the allocation
                        of storage and retrieval, providing a faster, more efficient experience at lower costs than
                        traditional cloud solutions. AI-powered fraud detection ensures a secure environment for both
                        node operators and users.</p>
                </div>
            </div>
        </section>
    );
}

export default WhyChoose;
