import React from 'react';
import './Timeline.css';

const Timeline = () => {
    const events = [
        { id: 1, title: 'Q4 2024 - Q1 2025', description: 'Launch of LynkDrive main net\n' +
                '                    Launch marketing campaigns to attract storage node operators\n' +
                '                    Early rewards distribution to storage contributors using LYND tokens' },
        { id: 2, title: 'Q2 - Q4 2025', description: 'Global expansion of the storage node network\n' +
                '                    Integration of AI-powered Proof of Space Quality for enhanced node validation\n' +
                '                    Launch mobile apps for seamless user experience' },
        { id: 3, title: '2026', description: 'Introduction of Object Storage Services\n' +
                '                    Listing LYND tokens on major exchanges\n' +
                '                    Develop partnerships with leading Web3 projects' },
        { id: 4, title: 'Beyond 2026', description: 'Expansion into decentralized computing and bandwidth services\n' +
                '                    Establish LynkDrive as a global leader in decentralized storage' },
    ];

    return (
        <div className="timeline">
            {events.map((event, index) => (
                <div
                    key={event.id}
                    className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                >
                    <div className={`timeline-dot ${index % 2 === 0 ? 'left' : 'right'}`}></div>
                    <div className="timeline-content">
                        <h3>{event.title}</h3>
                        <p>{event.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Timeline;
