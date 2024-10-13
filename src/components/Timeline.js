import React from 'react';
import './Timeline.css';

const Timeline = () => {
    const events = [
        { id: 1, title: 'Q1 - 2018', description: 'Lorem ipsum dolor sit amet' },
        { id: 2, title: 'Q2 - 2018', description: 'Lorem ipsum dolor sit amet' },
        { id: 3, title: 'Q3 - 2018', description: 'Lorem ipsum dolor sit amet' },
        { id: 4, title: 'Q4 - 2018', description: 'Lorem ipsum dolor sit amet' },
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
