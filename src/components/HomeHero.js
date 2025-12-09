import React from "react";

export default function HomeHero({roles, currentIndex}) {
    return (
        <section id="home--hero_section" className="home--hero">
            <div className="home--hero_content">
                <div className="home--hero_left">
                    <img src="/images/profile_pictures/profile_picture_1.jpeg" alt="Profile" className="home--hero_profile_picture" />
                    <p className="home--hero_description">
                        I'm a <strong>Software Engineer</strong> with <strong>1 year of experience</strong> building and architecting software for <strong>Braiv</strong> and <strong>Accenture</strong>. At Braiv, I <strong>architect ML pipelines</strong> and <strong>implement cloud engineering</strong> and <strong>DevOps practices</strong>. At Accenture, I <strong>engineered ETL data pipelines</strong>. I'm also an <strong>electronics enthusiast</strong> and currently work as a <strong>Retail Sales Assistant</strong> at <strong>Jaycar</strong> (6+ months of retail experience).
                    </p>
                </div>
                <h5 className="home--hero_text_header">Hello, I am a {" "}
                    <span className="home--hero_text_span">{roles[currentIndex]}</span>
                </h5>
            </div>
        </section>
    )
}