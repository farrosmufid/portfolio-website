import React from "react"
import HomeHero from "./HomeHero";
import MyTimeline from "./MyTimeline";
import DesignWork from "./DesignWork";
import Carousel from "./Carousel";
import PdfViewer from "./PdfViewer";

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
                <div className="content">
                    <div className="content-container">
                        <div className="texts">
                            <h2 className="title">Click to Upload or Drag and Drop CSV Files</h2>
                            <p className="paragraph">Easy upload for both antibiotic orders data and susceptibility data. 
                            You can either click to upload or drag and drop.</p>
                            <h2 className="title">Download Cleaned Data</h2>
                            <p className="paragraph">Downloaded cleaned data is avalable in CSV format.</p>
                        </div>
                        <div className="image-container">
                            <img className="design-work-img" src="/images/Update_Data.gif" alt="Update Data" width="426" height="265"/>
                        </div>
                    </div>
                </div>
            )   
        },
        {
            id: 'item-2',
            label: 'High Level Trends Page',
            content: (
                <div className="content">
                    <div className="content-container">
                        <div className="texts">
                            <h2 className="title">Filter and View Full Date Range</h2>
                            <p className="paragraph">Click to filter for specific date ranges and easily reset to view the full date range.</p>
                            <h2 className="title">Top Trend Month Year</h2>
                            <p className="paragraph">Top Trend filter, grouped by month year, based on various criteria.</p>
                        </div>
                        <div className="image-container">
                            <img className="design-work-img" src="/images/High_Level_Trends_1.gif" alt="High Level Trends 1" width="426" height="265"/>
                        </div>
                    </div>
                    <div className="content-container">
                        <div className="texts">
                            <h2 className="title">Line Charts of the Monthly Trend</h2>
                            <p className="paragraph">Line charts showing monthly trends can be filtered by multiple groups. Filtered charts can be downloaded in CSV format.</p>
                        </div>
                        <div className="image-container">
                            <img className="design-work-img" src="/images/High_Level_Trends_2.gif" alt="High Level Trends 2" width="426" height="265"/>
                        </div>
                    </div>
            </div>
            )
        }, 
        {
            id: 'item-3',
            label: 'Deep Dive Page',
            content: (
                <div className="content">
                    <div className="content-container">
                        <div className="texts">
                            <h2 className="title">Filter and View Full Date Range</h2>
                            <p className="paragraph">Click to filter for specific date ranges and easily reset to view the full date range.</p>
                            <h2 className="title">Filter for Multiple Categories</h2>
                            <p className="paragraph">Filter by one or more values for Order Generic, Medical Service, Ward, Doctor, and AMS Indication.</p>
                        </div>
                        <div className="image-container">
                            <img className="design-work-img" src="/images/Deep_dive_1.gif" alt="Deep Dive 1" width="426" height="265"/>
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
                            <img className="design-work-img" src="/images/Deep_dive_2.gif" alt="Deep Dive 2" width="426" height="265"/>
                        </div>
                    </div>
                    <div className="content-container">
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
                            <img className="design-work-img" src="/images/Deep_dive_3.gif" alt="Deep Dive 3" width="426" height="265"/>
                        </div>
                    </div>
                    <div className="content-container">
                        <div className="texts">
                            <h2 className="title">EGFR and First 24 hr Dose (2D Scatter Plot)</h2>
                            <p className="paragraph">
                                Use this 2D scatter plot to display the EGFR values relative to a patient's first 24-hour dosage, 
                                download a CSV of the displayed report, and apply multiple category filters to influence the data 
                                points in the chart.
                            </p>
                        </div>
                        <div className="image-container">
                            <img className="design-work-img" src="/images/Deep_dive_4.gif" alt="Deep Dive 4" width="426" height="265"/>
                        </div>
                    </div>
                    <div className="content-container">
                        <div className="texts">
                            <h2 className="title">Length of Stay vs. Number of Patients (Bar Graph)	</h2>
                            <p className="paragraph">
                                Use this bar chart to display the number of patients and their length of stay. 
                                It includes a separate filter for convenience, featuring options like Order Generic, 
                                AMS Indication, Frequency, and Dose. The chart can be downloaded as a CSV file.
                            </p>
                        </div>
                        <div className="image-container">
                            <img className="design-work-img" src="/images/Deep_dive_5.gif" alt="Deep Dive 5" width="426" height="265"/>
                        </div>
                    </div>
                </div>

            )
        },
        {
            id: 'item-4',
            label: 'Forecast Page',
            content: (
                <div className="content">
                    <div className="content-container">
                        <div className="texts">
                            <h2 className="title">
                                Analyse Trends in Antibiotic Usage
                            </h2>
                            <p className="paragraph">
                                Use the forecast page to view three line charts, each illustrating a distinct trend: one shows an increasing trend, 
                                another a decreasing trend, and the third a stable trend. These charts display the current and forecasted values of 
                                the monthly average dASC for different types of antibiotics, but only include antibiotic types that have at least four 
                                different monthly records in the current imported data.
                            </p>
                        </div>
                        <div className="image-container">
                            <img className="design-work-img" src="/images/Forecast_1.gif" alt="Forecast 1" width="426" height="265"/>
                        </div>
                    </div>
                    <div className="content-container">
                        <div className="texts">
                            <h2 className="title">Predict Antibiotic Trends: 6-Month and 12-Month Forecasting Tool</h2>
                            <p className="paragraph">
                            Explore powerful insights with our forecast section! Use the date range picker to select the desired time 
                            frame and choose one or multiple antibiotic types from the dropdown menu to visualize future usage trends. 
                            Remember, forecasts are only generated with at least four months of data. 
                            Click "View full date range" for a comprehensive view, reset data to its original state, 
                            explore 6-month or 12-month forecasts, or download the raw forecasting data to enhance your decision-making process.
                            </p>
                        </div>
                        <div className="image-container">
                            <img className="design-work-img" src="/images/Forecast_2.gif" alt="Forecast 2" width="426" height="265"/>
                        </div>
                    </div>
                </div>

            )
        },
        {
            id: 'item-5',
            label: 'Susceptibility Page',
            content: (
                <div className="content">               
                    <div className="content-container">
                        <div className="texts">
                            <h2 className="title">
                                8 Main Filters
                            </h2>
                            <p className="paragraph">
                                The susceptibility page has 8 main filters that apply to all 4 visualisations. 
                                They include a date range, a number of tests requirement, the type of orderable, the medical service, 
                                the antibiotic type, the organism, the nurse location and finally the medical officer.
                            </p>
                        </div>
                        <div className="image-container">
                            <img className="design-work-img" src="/images/Susceptibility_1.gif" alt="Susceptibility 1" width="426" height="265"/>
                        </div>
                    </div>
                    <div className="content-container">
                        <div className="texts">
                            <h2 className="title">
                                Top 10 Antibiotics and Organisms with Lowest Susceptibility Rates
                            </h2>
                            <p className="paragraph">
                            Explore antibiotic resistance trends with our dual horizontal bar charts. These charts highlight the top 10 antibiotics and organisms with 
                            the lowest susceptibility rates, adjusting dynamically based on any filters you apply, including specific medical services like General Surgery nec. 
                            Without filters, the charts show general trends across all data. Each bar details the antibiotic or organism name, susceptibility rate, 
                            and total tests or isolates. A colored dot indicates the general trend without filters, allowing for easy comparisons. For instance, 
                            while Ampicillin’s overall susceptibility rate might be 46%, it drops to 34% under the General Surgery nec, 
                            providing critical insights for informed decision-making.
                            </p>
                        </div>
                        <div className="image-container">
                            <img className="design-work-img" src="/images/Susceptibility_2.gif" alt="Susceptibility 2" width="426" height="265"/>
                        </div>
                    </div>
                    <div className="content-container">
                        <div className="texts">
                            <h2 className="title">
                                Antibiogram
                            </h2>
                            <p className="paragraph">
                                Our interactive summary table displays susceptibility rates and test counts for each organism 
                                and antibiotic combination, enhanced by intuitive filtering and sorting capabilities. Susceptibility rates 
                                are visually categorized into three color-coded bands for quick analysis: below 70% is marked as poor (red), 70% to 
                                89% as okay (yellow), and 90% and above as good (green). By default, only combinations with 30 or more tests are shown 
                                to ensure data reliability. For a comprehensive view, select 'All' to display all combinations, even those below the minimum 
                                test threshold, which are highlighted in orange to caution about their limited data. Additionally, users can search for specific organisms 
                                (note: the search is case sensitive) and sort the data by rates or number of tests using arrows next to each column.
                            </p>
                        </div>
                        <div className="image-container">
                            <img className="design-work-img" src="/images/Susceptibility_3.gif" alt="Susceptibility 3" width="426" height="265"/>
                        </div>
                    </div>
                    <div className="content-container">
                        <div className="texts">
                            <h2 className="title">
                                Track Antibiotic Susceptibility Trends Over Time
                            </h2>
                            <p className="paragraph">
                            Our line chart tracks antibiotic susceptibility trends over time and initially appears blank until you select one or more antibiotics. 
                            The Time Period Filter lets you adjust the timeline granularity from daily to yearly, depending on your interest. 
                            You can also manually zoom into specific time periods by clicking and dragging across the chart, 
                            providing a focused view of the data you need.
                            </p>
                        </div>
                        <div className="image-container">
                            <img className="design-work-img" src="/images/Susceptibility_4.gif" alt="Susceptibility 4" width="426" height="265"/>
                        </div>
                    </div>
                    <div className="content-container">
                        <div className="texts">
                            <h2 className="title">
                                Download Comprehensive Data Reports
                            </h2>
                            <p className="paragraph">
                                Easily download CSV files of both cleaned and aggregated data directly from our platform. 
                                These options ensure you have all the necessary details for your analyses, whether it's for routine 
                                updates or in-depth visualizations.
                            </p>
                        </div>
                        <div className="image-container">
                            <img className="design-work-img" src="/images/Susceptibility_5.gif" alt="Susceptibility 5" width="426" height="265"/>
                        </div>
                    </div>
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

    /* Functions for Awards section Modal Functionality */

    const [isAwardsModalOpen, setIsAwardsModalOpen] = React.useState(false)

    const openAwardsModal = () => setIsAwardsModalOpen(true);
    const closeAwardsModal = () => setIsAwardsModalOpen(false);

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
                <div className="awards-title">SUDATA Datathon 2023 - Best International Team</div>
                <button className="design_work_button" onClick={openAwardsModal}>Task Given and Our Solution</button>
                {
                    isAwardsModalOpen && (
                        <div
                            className="modal-backdrop"
                            onClick={(e) => e.target === e.currentTarget && closeAwardsModal()}
                        >
                            <dialog open>
                                <div className="awards_modal_description">
                                    <strong style={{display: 'block', 'font-size' :'1.25rem'}}>Task</strong>
                                    <span>
                                        My team and I, as data scientists, were enlisted by the Department of Agriculture,
                                        Fisheries, and Forestry to provide advice. We were asked to identify and analyse
                                        environmental, social, and governance issues affecting Australian agriculture.
                                        Our goal was to reveal contemporary problems, challenge preconceptions, and 
                                        propose solutions. 

                                        Our task included:
                                        <ul>
                                            <li>
                                                Identifying problems facing Australian agriculture.
                                            </li>
                                            <li>
                                                Explaining the scope, severity, and impact of those problems.
                                            </li>
                                            <li>
                                                Performing quantitative analyses to extract insights.
                                            </li>
                                            <li>
                                                Drawing conclusions and providing recommendations to the Department.
                                            </li>
                                            <li>
                                                Justifying our findings and recommendations with existing research.
                                            </li>
                                            <li>
                                                Clearly communicating our solution and its potential impact on stakeholders.
                                            </li>
                                        </ul>
                                        </span>
                                        <strong style={{display: 'block', 'font-size' :'1.25rem'}}>Problems Identified</strong>
                                        <span>
                                            Analysing data from eight CSV files covering environmental, governance, and social issues,
                                            including temperature anomalies, rainfall, water trades, water sources, economic factors,
                                            and employment statistics from various periods, we identified significant problems with water usage
                                            and unregulated water trades in Australia.

                                            Given Australia's status as one of the driest continents, its agriculture heavily relies on irrigation.
                                            Notably, rainfall has decreased by 10% over the last decade, leading to over-extraction of water,
                                            ecological degradation, reduced river flows, and declining groundwater levels.

                                            Unregulated water trades have created transparency issues and potential misuse by influential entities,
                                            resulting in unfair water distribution and mistrust among users, particularly affecting small farmers.
                                        </span>
                                        <strong style={{display: 'block', 'font-size' :'1.25rem'}}>Data Cleaning and Transformations</strong>
                                        <span>
                                            <ul>
                                                <li>
                                                    Renamed column titles appropriately. 
                                                </li>
                                                <li>
                                                    Selected relevant columns for analysis.
                                                </li>
                                                <li>
                                                    Extracted year values for specific analyses.
                                                </li>
                                                <li>
                                                    Converted dates into pandas datetime format.
                                                </li>
                                                <li>
                                                    Replaced missing values with zero in the appropriate contexts for numerical columns.
                                                </li>
                                            </ul>
                                        </span>
                                        <strong style={{display: 'block', 'font-size' :'1.25rem'}}>Explanatory Data Analysis (EDA) Graphs</strong>
                                        <span>
                                            <strong style={{display: 'block', 'font-size' :'1rem'}}>Water Shortage (Due to Climate Change Effects)</strong>
                                            <ul>
                                                <li>
                                                    Line chart of short-term precipitation vs. crop production value.
                                                </li>
                                                <li>
                                                    Bar chart of average annual rainfall from 2011 to 2021.
                                                </li>
                                                <li>
                                                    Heat map of temperature anomalies and rainfall amounts by season across states.
                                                </li>
                                            </ul>
                                        </span>     
                                        <span>
                                            <strong style={{display: 'block', 'font-size' :'1rem'}}>Water Shortage (Due to Overuse of Water)</strong>
                                            <ul>
                                                <li>
                                                    Trends in water source and usage over the years.
                                                </li>
                                                <li>
                                                    Top 10 water-consuming states in Australia from 2018 to 2020.
                                                </li>
                                            </ul>
                                        </span> 
                                        <span>
                                            <strong style={{display: 'block', 'font-size' :'1rem'}}>Societal and Governmental - Unregulated Water Trades</strong>
                                            <ul>
                                                <li>
                                                    Proportion of regulated vs. unregulated water trades from 2011 to 2021.
                                                </li>
                                                <li>
                                                    Trends of water trades unregulated by origin and destination states.
                                                </li>
                                            </ul>
                                        </span>    
                                        <span>
                                            <strong style={{display: 'block', 'font-size' :'1.25rem'}}>Solution (Recommendations to the Department of Agriculture, Fisheries, and Forestry)</strong>
                                            <strong style={{display: 'block', 'font-size' :'1rem'}}>Problem 1 - Water Shortage and Overuse</strong>
                                                <ul>
                                                    <li>
                                                        Implement efficient irrigation systems, such as drip irrigation, to reduce waste.
                                                    </li>
                                                    <li>
                                                        Incentivise sustainable practices for farmers who adopt water-efficient methods.
                                                    </li>
                                                    <li>
                                                        Engage local communities in water conservation initiatives.
                                                    </li>
                                                    <li>
                                                        Utilise sensors to monitor and manage water extraction in real-time.
                                                    </li>
                                                </ul>
                                               
                                            <strong style={{display: 'block', 'font-size' :'1rem'}}>Problem 2 - Unregulated Water Trades</strong>
                                                <ul>
                                                    <li>
                                                        Develop a centralised digital platform to record all water trades, enhancing transparency and
                                                        data accessibility.
                                                    </li>
                                                    <li>
                                                        Engage communities and stakeholders, including small farmers, to address concerns in water trade policies.
                                                    </li>
                                                    <li>
                                                        Implement trading volume limits to prevent monopolisation and ensure fair distribution.
                                                    </li>
                                                </ul>

                                        </span>                        
                                </div>
                                <br></br>
                                <strong style={{display: 'block', 'font-size' :'1.25rem'}}>12-Minute Slide Deck</strong>
                                <br></br>
                                <div className="download-link">
                                    <a href="/files/Group_12_Presentation.pdf" download="Group_12_Presentation.pdf">Download Slide Deck</a>
                                </div>
                                <br></br>
                                <PdfViewer/>
                            </dialog>
                        </div>
                    )
                }
                <div className="carousel-container">
                    <Carousel/>
                </div>
            </section>
            
            <section id="contact_me_section" className="tab--contact_me">
                <div className="contact-me-container">
                    <div className="contact-me-header">
                        <h1 className="get-in-touch">Get in Touch</h1>
                        <div className="tools-used">
                            This website is built using <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, and <strong>React</strong>
                        </div>
                    </div>
                    <div className="contact-me-right">
                        <div className="contact-me-content">
                            Are you in search of a dynamic professional skilled in Data Science, 
                            Frontend Web Development, or Creative Data Visualization? 
                            Whether you need a meticulous Data Analyst, an innovative Data Engineer, 
                            or a proficient Frontend Web Developer who brings data-driven insights to user-friendly 
                            interfaces, you have come to the right place. I am excited to explore opportunities 
                            that allow me to leverage my technical expertise and creative problem-solving skills 
                            to deliver outstanding results.
                        </div>
                        <div className="contact-me-buttons">
                            <div className="contact-me-button-wrapper">
                                <a href="mailto:farrosmufid.ofid@gmail.com" className="mail-to-button">farrosmufid.ofid@gmail.com</a>
                            </div>
                            <div className="contact-me-button-wrapper">
                                <a href="https://www.linkedin.com/in/farros-mufid" target="_blank" rel="noopener noreferrer" className="mail-to-button">LinkedIn</a>
                            </div>
                            <div className="contact-me-button-wrapper">
                                <a href="https://github.com/farrosmufid" target="_blank" rel="noopener noreferrer" className="mail-to-button">GitHub</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}