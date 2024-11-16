import React from "react";
import "./EarlyAdapters.css";

const EarlyAdapters = () => {
    return (
        <section className="early-section">
            <h2 className="text-4xl">Testimonials and Early Adopters</h2>
            <br/>
            <br/>
            <h4 className="text-left">What Our Early Adopters Are Saying:</h4>
            <br/>
            <div className="text-left">
                <p className="justify-self-center">"LynkDrive offers a revolutionary approach to
                    decentralized
                    storage. I’ve been earning LYND tokens while providing secure, decentralized storage!"</p>
                <p>– Node Operator, Web3 Dev</p>
            </div>
            <br/>
            <div className="text-left">
                <p>"Switching to LynkDrive has reduced our storage costs by 40%, and we have complete control over our
                    data
                    privacy."</p>
                <p>– Blockchain Startup Founder</p>
            </div>
        </section>
    )
}

export default EarlyAdapters;