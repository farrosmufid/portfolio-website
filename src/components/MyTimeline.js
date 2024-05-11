import React from "react";

export default function MyTimeline() {
    return (
        <section id="my_timeline_section" className="tab--my_timeline">
            <div className="section_two--container">
                <div className="section_two--row">
                    <div className="col-6 centered">
                        <h4 className="timeline-text">My Timeline</h4>
                        <ul className="timeline">
                            <li>
                                <a className="timeline-title" href="#my_timeline_section">Started Studying Electrical Engineering</a>
                                <a className="timeline-date right-aligned" href="#my_timeline_section">Aug 2015</a>
                                <p>Started studying for a Bachelor of Electrical Engineering at the University of Indonesia, 
                                    where I took courses such as Introduction to Programming, Statistics, Numerical Computations, 
                                    Signals and Systems, Electronic Circuits, and many more. I continued my studies for a Bachelor of Electrical Engineering
                                    in July 2017 at the University of Sydney, where I took courses such as Computer Architecture, Thesis A, and Thesis B.
                                </p>
                            </li>
                            <li>
                                <a className="timeline-title" href="#my_timeline_section">ETL Data Engineer Internship at Accenture</a>
                                <a className="timeline-date right-aligned" href="#my_timeline_section">Jan 2020 - Feb 2020</a>
                                <p>I helped with Telkomsel's three-year Data Migration project (2017-2020),
                                    transitioning from Oracle ERP to SAP S/4 HANA by developing 
                                    SQL queries and data service functions for eight fund management data objects, 
                                    ensuring smooth data extraction in line with the functional team's specifications.</p>
                            </li>
                            <li>
                                <a className="timeline-title" href="#my_timeline_section">Graduated 🎉</a>
                                <a className="timeline-date right-aligned" href="#my_timeline_section">May 2020</a>
                                <p>I graduated a Bachelor of Engineering Honours Degree in Electrical Engineering.
                                </p>
                            </li>
                            <li>
                                <a className="timeline-title" href="#my_timeline_section">Started Studying for a Graduate Diploma and Progressed to a Master of IT</a>
                                <a className="timeline-date right-aligned" href="#my_timeline_section">March 2021</a>
                                <p>I continued studying Computer Science and IT to broaden my knowledge in Software Engineering, 
                                    UI/UX Design, Data Science, and Data Analytics.
                                </p>
                            </li>
                            <li>
                                <a className="timeline-title" href="#my_timeline_section">Software Developer at Westmead Hospital (IT Capstone Project)</a> 
                                <a className="timeline-date right-aligned" href="#my_timeline_section">Aug 2023 - Nov 2023</a>
                                <p>I completed a capstone project focused on developing an interactive dashboard web application with Plotly Dash, 
                                    designed to monitor antibiotic resistance among Westmead Hospital patients. 
                                    In this project, I took on multiple roles, including that of a Front End Developer, 
                                    Data Analyst, and Data Scientist. As a Data Scientist, I used linear regression with time series 
                                    to forecast trends in Drug-Associated Susceptibility Changes (DASC) for various antibiotics.
                                    As a Front End Developer, I iterated the front-end UI design four times to enhance the UX based on the client's functional criteria.
                                    The client was satisfied with the results, achieving an HD grade.</p>
                            </li>
                            <li>
                                <a className="timeline-title" href="#my_timeline_section">Graduated with a Master of IT 🎉</a>
                                <a className="timeline-date right-aligned" href="#my_timeline_section">May 2024</a>
                                <p>I graduated a Master of IT at USYD, majoring in Data Management and Analytics.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}