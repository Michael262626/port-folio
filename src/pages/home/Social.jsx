import React from "react";
import Styles from "./Home.module.css";

const Social = () => {
    return (
        <div className={Styles.home__social}>
            <a href="https://www.linkedin.com/in/michael-dikandu-01b536260/" className={Styles.home__socialIcon} target={"_blank"} >
                <i className="uil uil-linkedin"></i>
            </a>

            <a href="https://wa.me/2347066993421" className={Styles.home__socialIcon} target={"_blank"} >
                <i className="uil uil-whatsapp"></i>
            </a>

            <a href="https://github.com/Michael262626" className={Styles.home__socialIcon} target={"_blank"} >
                <i className="uil uil-github"></i>
            </a>
        </div>

    );
};

export default Social;
