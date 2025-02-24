import React, { useState } from 'react';
import "./contact.css";

const Contact = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const Modal = ({ message, onClose }) => {
        return (
            <div className="modal">
                <div className="modal__content">
                    <i onClick={onClose} className="uil uil-times modal__close-icon"></i>
                    <p>{message}</p>
                </div>
            </div>
        );
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);

        const formData = new FormData(event.target);
        const response = await fetch("https://formspree.io/f/xqazvdep", {
            method: "POST",
            body: formData,
            headers: {
                Accept: "application/json"
            }
        });

        setIsLoading(false);

        if (response.ok) {
            setModalMessage("Message sent successfully!");
            setIsModalOpen(true);
            event.target.reset();
        } else {
            setModalMessage("There was a problem sending your message.");
            setIsModalOpen(true);
        }
    };

    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Get in touch</h2>
            <span className="section__subtitle">Contact Me</span>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">Talk to me</h3>
                    <div className="contact__info">
                        <div className="contact__card">
                            <i className="bx bx-mail-send contact__card-icon"></i>
                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">dikandumichael@gmail.com</span>
                            <a href="mailto:dikandumichael@gmail.com<" className="contact__button">
                                Write me
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>

                        <div className="contact__card">
                            <i className="bx bxl-whatsapp contact__card-icon"></i>
                            <h3 className="contact__card-title">WhatsApp</h3>
                            <span className="contact__card-data">+2347066993421</span>
                            <a href="https://wa.me/2347066993421" className="contact__button" target="_blank" rel="noopener noreferrer">
                                Write me
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="contact__content">
                    <h3 className="contact__title">Write me your project</h3>
                    <form className="contact__form" onSubmit={handleSubmit}>
                        <div className="contact__form-div">
                            <label className="contact__form-tag">Name</label>
                            <input type="text" name="name" className="contact__form-input"
                                   placeholder="Insert your name sir/ma" required />
                        </div>
                        <div className="contact__form-div">
                            <label className="contact__form-tag">Mail</label>
                            <input type="email" name="email" className="contact__form-input"
                                   placeholder="Insert your email sir/ma" required />
                        </div>
                        <div className="contact__form-div contact__form-area">
                            <label className="contact__form-tag">Message</label>
                            <textarea name="message" className="contact__form-input" placeholder="Write your message" required></textarea>
                        </div>
                        <button className="button button--flex" type="submit" disabled={isLoading}>
                            {isLoading ? (
                                <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                                </svg>
                            ) : (
                                "Send Message"
                            )}
                        </button>
                    </form>
                </div>
            </div>

            {isModalOpen && <Modal message={modalMessage} onClose={() => setIsModalOpen(false)} />}
        </section>
    );
};

export default Contact;
