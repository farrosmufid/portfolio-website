import React from "react";

export default function HomeHero({roles, currentIndex}) {
    return (
        <section id="home--hero_section" className="home--hero">
            <h2 className="home--hero_text_header">Hello, I am a {" "}
                <span className="home--hero_text_span">{roles[currentIndex]}</span>
            </h2>
        </section>
    )
}