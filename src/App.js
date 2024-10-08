import React, {useEffect, useState} from "react";
import Footer from "./components/Footer";
import "./index.css";
import "./App.css";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import Header from "./components/Header";

function App() {
    const [activeSection, setActiveSection] = useState(0);

    const sections = [<SectionOne/>, <SectionTwo/>, <SectionThree/>];

    useEffect(() => {
        const sectionElements = document.querySelectorAll(".section");
        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5, // Trigger when 50% of the section is visible
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = Array.from(sectionElements).indexOf(entry.target);
                    setActiveSection(index);
                }
            });
        }, observerOptions);

        sectionElements.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            sectionElements.forEach((section) => {
                observer.unobserve(section);
            });
        };
    }, []);

        // const handleScroll = () => {
    //     const sectionElements = document.querySelectorAll(".section");
    //     const scrollPosition = window.scrollY;
    //
    //     sectionElements.forEach((section, index) => {
    //         const sectionTop = section.offsetTop;
    //         const sectionHeight = section.clientHeight;
    //
    //         if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
    //             setActiveSection(index);
    //         }
    //     });
    // };
    //
    // useEffect(() => {
    //     window.addEventListener("scroll", handleScroll);
    //     return () => window.removeEventListener("scroll", handleScroll);
    // }, []);

    return (
        <div className="container">
            <Header/>

            <div className="scroll-indicator">
                {sections.map((_, index) => (
                    <div
                        key={index}
                        className={`bullet ${activeSection === index ? "active" : ""}`}
                        onClick={() => {
                            setActiveSection(index)
                            document.querySelectorAll(".section")[index].scrollIntoView({
                                behavior: "smooth",
                            });
                        }}
                    />
                ))}
            </div>

            {sections.map((title, index) => (
                    <section className="section" key={index}>
                        {title}
                    </section>
            ))}
            <Footer/>
        </div>
    );
}

export default App;