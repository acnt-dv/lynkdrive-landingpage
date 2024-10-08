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

function App() {
    return (
        <div className="App">
            <Header />
            <Hero />
            <Features />
            <InteractiveMap />
            <HowItWorks />
            <LyndToken />
            <Roadmap />
            <Footer />
        </div>
    );
}

export default App;