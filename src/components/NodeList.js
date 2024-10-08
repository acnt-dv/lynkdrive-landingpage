import React from "react";
import "./NodeList.css";

function NodeList() {
    // Sample node data
    const nodes = [
        { id: 1, ip: "192.168.0.1", city: "New York" },
        { id: 2, ip: "192.168.0.2", city: "Los Angeles" },
        { id: 3, ip: "192.168.0.3", city: "Chicago" },
        { id: 4, ip: "192.168.0.4", city: "Houston" },
        { id: 5, ip: "192.168.0.5", city: "Miami" },
        { id: 6, ip: "192.168.0.6", city: "San Francisco" },
    ];

    return (
        <div className="node-list">
            {nodes.map((node) => (
                <div className="node-item" key={node.id}>
                    <span className="node-city">&bull; {node.city}</span>
                    <span className="node-ip">: </span>
                    <span className="node-ip">{node.ip}</span>
                </div>
            ))}
        </div>
    );
}

export default NodeList;
