// FAQ.js
import React, {useState} from 'react';
import './FAQ.css'; // Import the CSS file

const FAQ = () => {
    const faqs = [
        {
            question: 'How do I become a storage node operator?',
            answer: 'Simply sign up, download the LynkDrive node software, and contribute your unused storage space. You’ll start earning LYND tokens based on your contribution and storage quality.'
        },
        {
            question: 'What makes LynkDrive more secure than traditional storage?',
            answer: 'LynkDrive encrypts, fragments, and distributes data across multiple nodes, eliminating single points of failure and ensuring maximum data privacy.'
        },
        {
            question: 'How are LYND tokens used within the ecosystem?',
            answer: 'LYND tokens are used for network fees, accessing storage services, governance participation, and incentivizing node operators.'
        },
        {
            question: ' What happens if my storage node goes offline?',
            answer: 'LynkDrive’s load balancing and redundancy protocols ensure that data is never lost. However, offline nodes may earn reduced LYND rewards.'
        },
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="faq-section">
            <h2 className="faq-heading">Frequently Asked Questions (FAQ)</h2>
            <div className="max-w-3xl mx-auto space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="faq-item">
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="faq-question"
                        >
                            {faq.question}
                            <span className="text-ldGreen">
                {openIndex === index ? '-' : '+'}
              </span>
                        </button>
                        {openIndex === index && (
                            <p className="faq-answer">{faq.answer}</p>
                        )}
                    </div>
                ))}
            </div>
            <div className="grid justify-self-center gap-y-3 mt-4 text-center w-1/2">
                <p>Call to Action</p>
                <p>Join the Decentralized Storage Revolution
                    Start earning LYND tokens today by contributing your unused storage space. Sign up to become a
                    LynkDrive node operator or explore our advanced, AI-powered storage solutions for your Web3
                    project.</p>
                <p>Get Started | Become a Node</p>
            </div>
        </section>
    );
};

export default FAQ;
