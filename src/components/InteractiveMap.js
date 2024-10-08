import React from "react";
import "./InteractiveMap.css";
import NodeList from "./NodeList";

function InteractiveMap() {
    return (
        <div className="flex justify-center items-center">
            <section className="interactive-map">
                <h2>Explore our Global Network of Nodes</h2>
                <div className="map">
                    {/* Placeholder for the interactive map */}
                    {/*<img src="path_to_your_map_image.png" alt="Global Node Map" />*/}
                </div>
            </section>
            <NodeList/>
        </div>
    );
}

export default InteractiveMap;
