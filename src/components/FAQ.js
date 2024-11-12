// FAQ.js
import React, { useState } from 'react';
import './FAQ.css'; // Import the CSS file

const FAQ = () => {
    const faqs = [
        { question: 'What is LynkDrive?', answer: 'LynkDrive is a decentralized cloud storage solution based on blockchain technology, providing secure and distributed storage options.' },
        { question: 'How does LynkDrive ensure data security?', answer: 'LynkDrive utilizes blockchain encryption and distributed nodes, ensuring that data remains secure and private.' },
        { question: 'What are the benefits of using decentralized storage?', answer: 'Decentralized storage reduces reliance on central servers, increases data privacy, and provides resilience against outages.' },
        { question: 'How do I earn tokens on LynkDrive?', answer: 'By contributing storage space to the network, users can earn LynkDrive’s native token, Lynd.' },
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="faq-section">
            <h2 className="faq-heading">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="faq-item">
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="faq-question"
                        >
                            {faq.question}
                            <span className="text-green-300">
                {openIndex === index ? '-' : '+'}
              </span>
                        </button>
                        {openIndex === index && (
                            <p className="faq-answer">{faq.answer}</p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQ;
