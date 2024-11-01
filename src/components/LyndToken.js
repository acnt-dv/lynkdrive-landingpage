import React from "react";
import "./LyndToken.css";

function LyndToken() {
    return (
        <section className="lynd-token">
            <h2>What is LYND Token and LynkDrive Tokenomics?</h2>
            <img src="path_to_lynd_token_image.png" alt="LYND Token"/>
            <p className="w-3/4 flex justify-self-center">LYND is the native token of LynkDrive's decentralized ecosystem, used for accessing storage services,
                paying network fees, and voting on governance proposals. It also serves as the reward mechanism for
                users who contribute storage to the network.</p>
            <br/>
            <h2>Tokenomics</h2>
            <p>Total Supply: 1 billion LYND tokens
                Use Cases: Storage services, network fees, governance participation, and rewards</p>
            <ul className="text-left justify-self-center">Allocation:
                <li>50% for storage node rewards and incentives</li>
                <li>10% for public sale</li>
                <li>10% for team and advisors</li>
                <li>20% reserved for future expansion</li>
                <li>10% for marketing and community growth</li>
            </ul>

        </section>
    );
}

export default LyndToken;
