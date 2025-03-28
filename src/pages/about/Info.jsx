import React from "react";
import "./About.css";
const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
                <i className="bx bx-award about__icon"></i>
                <h3 className="about__title">Experience</h3>
                <span className="about__subtitle">4 Years of working</span>
            </div>
            <div className="about__box">
                <i className="bx bx-briefcase-alt about__icon"></i>
                <h3 className="about__title">Projects</h3>
                <span className="about__subtitle">10+ Completed Projects</span>
            </div>
            <div className="about__box">
                <i className="bx bx-support about__icon"></i>

                <h3 className="about__title">Support</h3>
                <span className="about__subtitle">Available for New Opportunities</span>
            </div>
        </div>
    )
}

export default Info;
