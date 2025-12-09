import React from "react";

function openGitHub() {
    window.open('https://github.com/farrosmufid/Antimicrobial-Consumption-Dashboard-V4', '_blank')
}

export default function DesignWork({tabs, activeTab, handleClick, isModalOpen, openModal, closeModal}){
    return (
        <section id="design_work_section" className="tab--design_work">
            <div className="design_work_title">
                <h1 className="design_work_header">Antimicrobial Consumption Dashboard</h1>
                <h2>(Capstone Project with Westmead Hospital)</h2>
                <div>
                    <button className="design_work_button" onClick={openModal}>Project Description</button>
                    <button className="design_work_button" onClick={openGitHub}>GitHub Link</button>

                    {
                        isModalOpen && (
                            <div
                                className="modal-backdrop"
                                onClick={(e) => e.target === e.currentTarget && closeModal()}
                            >
                                <dialog open>
                                    <h2>Project Title: Antimicrobial Consumption Dashboard</h2>
                                    <br></br>
                                    <div>
                                        <strong>Tools Used:</strong> Python 3, Plotly Dash, Scikit-Learn, Pandas, Numpy, HTML, CSS, JavaScript, React JS, and Microsoft Excel.
                                    </div>
                                    <div className="design_work_description">
                                        <div>
                                            <h3 style={{ display: "inline-block" }}>Abstract:{" "}</h3>
                                            <span>{" "}This project developed an interactive dashboard to visualize and analyze antibiotic usage at Westmead Hospital. The dashboard helped healthcare researchers and practitioners identify trends, monitor prescriptions, and forecast potential overuse, contributing to better antimicrobial stewardship and supporting efforts to combat antibiotic resistance.
                                            </span>
                                        </div>
                                        <div>
                                            <h3 style={{ display: "inline-block" }} >Problem:</h3>
                                            <span>{" "}Westmead Hospital had raw, uncleaned data with limited visibility into the trends for antimicrobial consumption and resistance, which posed challenges in visualizing this information to gain actionable insights.
                                            </span>
                                        </div>
                                        <div>
                                            <h3 style={{display:"inline-block"}}>Solution:</h3>
                                            <span>{" "}The solution involved identifying antimicrobial consumption patterns, establishing a robust data transformation and cleaning process, and creating an interactive dashboard that integrated client-approved metrics. 
                                            The dashboard was user-friendly and accessible to non-technical users. It also provided comprehensive analysis of antimicrobial resistance, helping Westmead Hospital effectively manage the use of antimicrobials.
                                            </span>
                                        </div>
                                    </div>
                                    {/* <button onClick={closeModal}>Close</button> */}
                                </dialog>

                            </div>
                        )
                    }
                </div>
            </div>
            <div className="section_three--container">
                <div className="section_three--tab">
                    <div className="section_three--tab-menu">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                data-content={tab.id}
                                className={`tab-menu-link ${activeTab === tab.id ? 'is-active': ''}`}
                                onClick= {() => handleClick(tab.id)}
                            >
                                <span data-title={tab.id}>{tab.label}</span>
                            </button>
                        ))}
                    </div>
                </div>
                <div className="section_three--tab-bar">
                    {tabs.map((tab) => (
                        <div
                            key={tab.id}
                            className={`tab-bar-content ${activeTab === tab.id ? 'is-active': ''}`}
                            id={tab.id}
                        >
                        {tab.content}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}