import React from "react";

export default function MyTimeline() {
    return (
        <section id="my_timeline_section" className="tab--my_timeline">
            <div className="section_two--container">
                <div className="section_two--row">
                    <div className="col-6 centered">
                        <h4 className="timeline-text">Professional Experience</h4>
                        <ul className="timeline">
                            <li>
                                <div className="timeline-header">
                                    <img src="/images/logos/braiv_logo.jpg" alt="Braiv Logo" className="timeline-logo" />
                                    <a className="timeline-title" href="#my_timeline_section">Software Engineer @ Braiv (Sydney, Australia)</a>
                                    <a className="timeline-date right-aligned" href="#my_timeline_section">April 2025 - December 2025</a>
                                </div>
                                <p>• Building end-to-end AI/ML media generation pipelines (lipsync, translation, thumbnails).</p>
                                <p>• Building event-driven asynchronous task pipelines using Firestore writes to trigger automatic workflows, webhook handlers to process external callbacks, Cloud Functions to orchestrate multi-step AI pipelines (thumbnails, lipsync), and Pub/Sub queues to allow background job execution without blocking user requests.</p>
                                <p>• Integrating multiple AI services (OpenAI, Gemini, Leonardo.ai, etc.) into modular Cloud Functions with error handling, retry logic, and webhook-based async processing, ensuring reliable processing across different AI providers.</p>
                                <p>• Implementing consistent authentication and error handling patterns across multiple AI service integrations (OpenAI, Gemini, Leonardo.ai) using centralized secret management and standardized error responses.</p>
                                <p>• Managing multi-environment deployments (dev/prod) using Docker multi-architecture builds and Google Cloud Artifact Registry for container image storage and distribution.</p>
                                <p>• Setting up GitHub Action workflows to automate builds and deployment triggers.</p>
                                <p>• Managing environment variables and secrets using GCP Secret Manager.</p>
                                <p>• Adding structured logging tracing, and async error reporting to improve debugging clarity in the development environment.</p>
                                <p>• Building frontend UI/UX with React, TypeScript, and React-Bootstrap.</p>
                            </li>
                            <li>
                                <div className="timeline-header">
                                    <img src="/images/logos/jaycar_logo.svg" alt="Jaycar Logo" className="timeline-logo" />
                                    <a className="timeline-title" href="#my_timeline_section">Retail Sales Assistant @ Jaycar Electronics (Sydney, Australia)</a>
                                    <a className="timeline-date right-aligned" href="#my_timeline_section">April 2025 - Present</a>
                                </div>
                                <p>• Providing customers with guidance on electronics, networking hardware, and components based on their needs.</p>
                                <p>• Improving in-store product organisation for a clean and well-structured layout.</p>
                                <p>• Handling click-and-collect orders and returns as part of daily store operations.</p>
                                <p>• Performing retail sales and operating POS systems to process customer transactions.</p>
                            </li>
                            <li>
                                <div className="timeline-header">
                                    <img src="/images/logos/accenture_logo.png" alt="Accenture Logo" className="timeline-logo" />
                                    <a className="timeline-title" href="#my_timeline_section">ETL Data Engineer Internship @ Accenture (Jakarta, Indonesia)</a> 
                                    <a className="timeline-date right-aligned" href="#my_timeline_section">January 2020 - February 2020</a>
                                </div>
                                <p>• Handling eight data objects in fund management, focusing on executing and troubleshooting SAP Data Services for Extract, Transform, and Load (ETL) operations.</p>
                                <p>• Developing and executing SQL scripts and data transformation blocks (Pivot, Reverse Pivot) in SAP Data Services to facilitate data extraction, transformation, validation, and loading to ensure a smooth data migration process.</p>
                                <p>• Debugging SAP Data Services workflows when anomalies occurred during ETL operations. .</p>
                                <p>• Writing extraction logic based on functional team specifications.</p>
                                <p>• Updating source files and executing pre-load and post-load validation for all assigned data objects.</p>
                                <p>• Generating ATL files to document the final working code at the end of the data migration to ensure system maintainability and future traceability.</p>
                                <p>• Modelling ARIS Architect & Designer logic according to changes specified by the functional team, maintaining accurate documentation.</p>
                                <p>• Assisting in risk management assessments by identifying potential data discrepancies and mitigating data migration risks in coordination with the functional team.</p>
                                <p>• Resolving critical data mismatches and anomalies during the Go-Live phase, preventing disruptions in the data migration process, and ensuring data accuracy.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}