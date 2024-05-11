import React from "react"
import HomeHero from "./HomeHero";
import MyTimeline from "./MyTimeline";
import DesignWork from "./DesignWork";
import Carousel from "./Carousel";

export default function Main() {

    /* Functions for HomeHero section */

    const roles = [
        "Front End Developer",
        "Data Scientist",
        "Creative",
        "Data Analyst",
        "Data Engineer",
        "USYD Alumni"    
    ]

    const [currentIndex, setCurrentIndex] = React.useState(0);

    React.useEffect(() => {
        const rotator = () => {
            setCurrentIndex((prevIndex)=> (prevIndex + 1) % roles.length);
        };

        const intervalId = setInterval(rotator, 800);

        return () => clearInterval(intervalId)
    }, [roles.length])

    /* Functions for Design Work section */

    const tabs = [
        {
            id: 'item-1',
            label: 'Update Data Page',
            content: (
                <div>
                    <div className="content-container">
                        <div className="texts">
                            <h2 className="title">Click to Upload or Drag and Drop CSV Files</h2>
                            <p className="paragraph">Easy upload for both antibiotic orders data and susceptibility data. 
                            You can either click to upload or drag and drop.</p>
                            <h2 className="title">Download Cleaned Data</h2>
                            <p className="paragraph">Downloaded cleaned data is avalable in CSV format.</p>
                        </div>
                        <div className="image-container">
                            <img src="https://via.placeholder.com/426x240" alt="Feature Image"/>
                        </div>
                    </div>
                </div>
            )   
        },
        {
            id: 'item-2',
            label: 'High Level Trends Page',
            content: (
                <div>
                    <div className="content-container">
                        <div className="texts">
                            <h2 className="title">Filter and View Full Date Range</h2>
                            <p className="paragraph">Click to filter for specific date ranges and easily reset to view the full date range.</p>
                            <h2 className="title">Top Trend Month Year</h2>
                            <p className="paragraph">Top Trend filter, grouped by month year, based on various criteria.</p>
                        </div>
                        <div className="image-container">
                            <img src="https://via.placeholder.com/426x240" alt="Feature Image"/>
                        </div>
                    </div>
                    <div className="content-container">
                        <div className="texts">
                            <h2 className="title">Line Charts of the Monthly Trend</h2>
                            <p className="paragraph">Line charts of the monthly trend can be filtered by multiple groups.</p>
                        </div>
                        <div className="image-container">
                            <img src="https://via.placeholder.com/426x240" alt="Feature Image"/>
                        </div>
                    </div>
            </div>
            )
        }, 
        {
            id: 'item-3',
            label: 'Deep Dive Page',
            content: (
                <div>
                    <div className="content-container">
                        <div className="texts">
                            <h2 className="title">Filter and View Full Date Range</h2>
                            <p className="paragraph">Top Trend filter, grouped by month year, based on various criteria.</p>
                            <h2 className="title">Filter for Multiple Categories</h2>
                            <p className="paragraph">Filter by one or more values for Order Generic, Medical Service, Ward, Doctor, and AMS Indication.</p>
                        </div>
                        
                        <div className="image-container">
                            <img src="https://via.placeholder.com/426x240" alt="Feature Image"/>
                        </div>
                    </div>
                    <div className="content-container">
                        <div className="texts">
                            <h2 className="title">Correlation Analysis</h2>
                            <p className="paragraph">
                                Filter and observe the relationship between 2 variables for analysis.
                                The scatterplot on the left shows the relationship between two chosen metrics.
                                The charts on the right show the trends of those metrics based on the Order Generic that is hovered on.
                                There is an option to download a csv of the report you have displayed.
                            </p>
                        </div>
                        <div className="image-container">
                            <img src="https://via.placeholder.com/426x240" alt="Feature Image"/>
                        </div>
                    </div>
                    {/* <div className="content-container">
                        <div className="texts">
                            <h2 className="title">Age, Weight, Exact Dose (3D Scatter Plot)</h2>
                            <p className="paragraph">
                                Use the filter to select a generic type of order and analyze the relationship between dosage, patient's weight, and age.
                                The 3D scatter plot is interactive; the user can zoom in and out, and drag the chart to move the view.
                                Only one generic order can be selected at a time.
                                There is an option to download a CSV of the report you have displayed.
                            </p>
                        </div>
                        <div className="image-container">
                            <img src="https://via.placeholder.com/426x240" alt="Feature Image"/>
                        </div>
                    </div> */}
                </div>

            )
        },
        {
            id: 'item-4',
            label: 'Forecast Page',
            content: (
                <div className="texts">
                    <h2 className="title">
                        Forecast Page
                        <p className="paragraph">
                            Content for tab item 4
                        </p>
                    </h2>
                </div>
            )
        },
        {
            id: 'item-5',
            label: 'Susceptibility Page',
            content: (
                <div className="texts">
                    <h2 className="title">
                        Susceptibility Page
                        <p className="paragraph">
                            Content for tab item 5
                        </p>
                    </h2>
                </div>
            )
        }
    
    ]

    /* Functions for Design Work section  -- Tabs Functionality*/

    const [activeTab, setActiveTab] = React.useState('item-1')

    const handleTabClick = (tabId) => {
        setActiveTab(tabId)
    }

    /* Functions for Design Work section  -- Modal Functionality*/

    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);


    return (
        <main>
            <HomeHero roles={roles} currentIndex={currentIndex} />
            <MyTimeline/>
            <DesignWork 
                tabs={tabs} 
                activeTab={activeTab} 
                handleClick={handleTabClick}
                isModalOpen = {isModalOpen}
                openModal = {openModal}
                closeModal = {closeModal}
            /> 
            
            <section id="awards_section" className="tab--awards">
                <Carousel/>
            </section>
            
            <section id="contact_me_section" className="tab--contact_me">
                <h1>Contact Me</h1>
            </section>
        </main>
    )
}