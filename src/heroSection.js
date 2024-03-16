import React from "react";
import './heroSection.css'
const HeroSection = () => {
    return (
        <div className="container-fluid heroSection">
            <div className="row  vh-100">
                <div className="col-md-6  text-white info">
                    <h1>Katie Reed</h1>
                    <p className="description">Web Developer & Designer</p>
                    <a href="#" className="btn btn-light">CONTACT ME</a>
                </div>
            </div>
        </div>
    );
}

export default HeroSection