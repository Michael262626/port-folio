import React from 'react';
import './testimonials.css';
import { Data } from './Data';

const Testimonials = () => {
    return (
        <section className="testimonial container section" id="testimonials">
            <h2 className="section__title">EXPERIENCE</h2>
            <span className="section__subtitle">My experience so far in my journey....</span>

            <div className="testimonial__grid">
                {Data.map(({ id, title, description }) => (
                    <div className="testimonial__card" key={id}>
                        <h3 className="testimonial__name">{title}</h3>
                        <p className="testimonial__description">{description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
