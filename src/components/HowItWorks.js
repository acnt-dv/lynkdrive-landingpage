import React from "react";
import "./HowItWorks.css";

function HowItWorks() {
    return (
        <section className="how-it-works">
            <h2 className="my-4 text-3xl">How LynkDrive Works</h2>
            <div className="steps">
                <div className="step">
                    <h3 className="text-lg mb-4">Contribute Your Unused Storage</h3>
                    <p className="text-xs text-justify">Become a storage node by offering your spare storage capacity to the LynkDrive network. In
                        return, you'll earn LYND tokens based on your contribution and the quality of the space
                        provided.</p>
                </div>
                <div className="step">
                    <h3 className="text-lg mb-4">Data Encryption and Distribution</h3>
                    <p className="text-xs text-justify">All data uploaded to LynkDrive is first encrypted, then split into smaller fragments before being
                        distributed across decentralized storage nodes. This ensures high-level security and
                        redundancy.</p>
                </div>
                <div className="step">
                    <h3 className="text-lg mb-4">AI-Powered Monitoring and Optimization</h3>
                    <p className="text-xs text-justify">LynkDrive’s AI algorithms continuously optimize how data is stored, ensuring minimal downtime,
                        faster retrieval speeds, and efficient use of storage resources. Fraud detection mechanisms
                        validate the quality of each storage node to maintain network integrity.</p>
                </div>
                <div className="step">
                    <h3 className="text-lg mb-4">LYND Token Rewards</h3>
                    <p className="text-xs text-justify">Each storage node operator is compensated with LYND tokens, the backbone of LynkDrive’s
                        ecosystem. These tokens can be used for governance, trading, or accessing advanced features like
                        faster data retrieval and premium services.</p>
                </div>
                <div className="step">
                    <h3 className="text-lg mb-4">Intelligent Data Management & Retrieval</h3>
                    <p className="text-xs text-justify">LynkDrive’s AI models optimize data storage by analyzing usage patterns, ensuring your data is
                        always stored and retrieved in the most efficient manner. Predictive storage management further
                        reduces costs by utilizing AI-powered resource allocation.</p>
                </div>
                <div className="step">
                    <h3 className="text-lg mb-4">Seamless Integration with Web3 Ecosystems</h3>
                    <p className="text-xs text-justify">Built for the Ethereum network and other EVM-compatible blockchains, LynkDrive is the ideal
                        storage solution for decentralized applications (dApps) and smart contracts. We offer seamless
                        integration with decentralized platforms, providing a storage backbone optimized for Web3.</p>
                </div>
            </div>
        </section>
    );
}

export default HowItWorks;
