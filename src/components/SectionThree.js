import React from "react";
import "./Roadmap.css";
import EarlyAdapters from "./EarlyAdapters";
import WhyChoose from "./WhyChoose";

function SectionThree() {
    return (
        <div className="grid mt-4">
            <WhyChoose/>
            <EarlyAdapters/>
        </div>
    );
}

export default SectionThree;
