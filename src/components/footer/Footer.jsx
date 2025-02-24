import React from 'react';
import './footer.css'
const Footer = () => {
    return (
       <footer className="footer">
           <div className="footer__container container">
               <h1 className="footer__title">MICHAEL DIKANDU</h1>
               <ul className="footer__list">
                   <li>
                       <a href="#about" className="footer__link">About</a>
                   </li>
                   <li>
                       <a href="#projects" className="footer__link">Projects</a>
                   </li>
                   <li>
                       <a href="#testimonials" className="footer__link">Testimonials</a>
                   </li>

               </ul>

               <div className="footer__social">
                   <a href="https://www.linkedin.com/in/michael-dikandu-01b536260/" className="footer__social-link"  target={"_blank"}>
                       <i className="uil uil-linkedin"></i>
                   </a>

                   <a href="https://github.com/Michael262626" className="footer__social-link" target={"_blank"}>
                       <i className="uil uil-github"></i>
                   </a>

               </div>
               <span className="footer__copy">&#169; Dikandu Michael. All rights reserved</span>
           </div>
       </footer>
    );
}

export default Footer;
