import React, { useState } from 'react';
import "./Projects.css";

const ServiceModal = ({ toggleTab, toggleState, index, title, description, projects }) => {
    return (
        <div className={toggleState === index ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
                <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                <h3 className="services__modal-title">{title}</h3>
                <p className="services__modal-description">{description}</p>

                {/* Projects Section */}
                <h4 className="services__modal-subtitle">Projects</h4>
                <ul className="services__modal-projects">
                    {projects.map((project, i) => (
                        <li key={i} className="services__modal-project">
                            <i className="uil uil-folder services__modal-icon"></i>
                            <p className="services__modal-info">
                                {project.projectName} -{" "}
                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                    View Project
                                </a>
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const ServiceContent = ({ icon, title, toggleTab, index }) => {
    return (
        <div className="services__content">
            <div>
                <i className={`uil ${icon} services__icon`}></i>
                <h3 className="services__title">{title}</h3>
            </div>
            <span className="services__button" onClick={() => toggleTab(index)}>
                View More
                <i className="uil uil-arrow-right services__button-icon"></i>
            </span>
        </div>
    );
};

const Projects = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    const serviceData = [
        {
            title: "Frontend Engineer",
            description: "Specializing in intuitive, user-friendly interfaces with modern JavaScript frameworks, I build fast, responsive, and accessible web applications optimized for performance.",
            icon: "uil-web-grid",
            projects: [
                {
                    projectName: "Events management",
                    githubLink: "https://events-advance-2025.vercel.app/"
                },
                {
                    projectName: "Blog Website",
                    githubLink: "https://myblog-seven-sigma.vercel.app/"
                },
                {
                    projectName: "Lend sqr fe-test",
                    githubLink: "https://michael-dikandu-lendsqr-fe-test.vercel.app/signup"
                },
            ]
        },
        {
            title: "Backend Engineer",
            description: "Experienced in building scalable and efficient backend systems, " +
                "ensuring performance and security using Java, Python and JavaScript.",
            icon: "uil-server-network",
            projects: [
                {
                    projectName: "CAPSTONE PROJECT",
                    githubLink: "https://github.com/Michael262626/CapStoneProject"
                },
                {
                    projectName: "ServiceMatch API",
                    githubLink: "https://github.com/MultiConnectWeb/MultiConnect"
                },
                {
                    projectName: "MAVERICKS_HUB",
                    githubLink: "https://github.com/Michael262626/mavericks_hb"
                },
                {
                    projectName: "CONTACT MANAGEMENT",
                    githubLink: "https://github.com/Michael262626/ContactManager"
                },
                {
                    projectName: "PASSWORD MANAGER",
                    githubLink: "https://github.com/Michael262626/PasswordManagementService"
                },
                
            ]
        },
        {
            title: "Algorithm Developer",
            description: "Proficient in algorithm design and problem-solving, optimizing solutions for complex computational problems.",
            icon: "uil-brain",
            projects: [
                
                {
                    projectName: "Tic Tac Toe Game Algorithm",
                    githubLink: "https://github.com/Michael262626/Java-code-rank2/tree/main/src/TicTacToeGame"
                },
                {
                    projectName: "TurtleGraphics Algorithm",
                    githubLink: "https://github.com/Michael262626/Java-code-rank2/tree/main/src/Turtle"
                },
                {
                    projectName: "SevenSegment Algorithm",
                    githubLink: "https://github.com/Michael262626/Java-code-rank2/tree/main/src/SevenSegmentDisplay"
                },
            ]
        }
    ];

    return (
        <section className="services section" id="projects">
            <h2 className="section__title">Projects</h2>
            <span className="section__subtitle">What I Have Done</span>

            <div className="services__container container grid">
                {serviceData.map((service, index) => (
                    <React.Fragment key={index}>
                        <ServiceContent
                            icon={service.icon}
                            title={service.title}
                            toggleTab={toggleTab}
                            index={index + 1}
                        />
                        <ServiceModal
                            toggleTab={toggleTab}
                            toggleState={toggleState}
                            index={index + 1}
                            title={service.title}
                            description={service.description}
                            projects={service.projects}
                        />
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
};

export default Projects;
