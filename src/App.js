import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import InteractiveMap from "./components/InteractiveMap";
import HowItWorks from "./components/HowItWorks";
import LyndToken from "./components/LyndToken";
import Roadmap from "./components/Roadmap";
import Footer from "./components/Footer";
import "./index.css";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Header/>
            <div className="container">
                <section className="section">
                    <Hero/>
                </section>
                <section className="section">
                    <Features/>
                    <InteractiveMap/>
                </section>
                <section className="section">
                    <HowItWorks/>
                    <LyndToken/>
                </section>
                <section className="section">
                    <Roadmap/>
                    <Footer/>
                </section>
            </div>

        </div>
    );
}

export default App;