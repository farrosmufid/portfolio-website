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
                <div className="content">
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
                <div className="content">
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
                            <img src="https://via.placeholder.com/426x240" alt="Feature Image"/>
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
                            <img src="https://via.placeholder.com/426x240" alt="Feature Image"/>
                        </div>
                    </div>
                    <div className="content-container">
                        <div className="texts">
                            <h2 className="title">Length of Stay vs. Number of Patients (Bar Graph)	</h2>
                            <p className="paragraph">
                                Use this bar chart to display the number of patients and their length of stay. 
                                It includes a separate filter for convenience, featuring options like Order Generic, 
                                AMS Indication, Frequency, and Dose.
                            </p>
                        </div>
                        <div className="image-container">
                            <img src="https://via.placeholder.com/426x240" alt="Feature Image"/>
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
                            <img src="https://via.placeholder.com/426x240" alt="Feature Image"/>
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
                            <img src="https://via.placeholder.com/426x240" alt="Feature Image"/>
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
                            <img src="https://via.placeholder.com/426x240" alt="Feature Image"/>
                        </div>
                    </div>
                    <div className="content-container">
                        <div className="texts">
                            <h2 className="title">
                                Top 10 Antibiotics and Organisms with Lowest Susceptibility Rates
                            </h2>
                            <p className="paragraph">
                            Explore antibiotic resistance trends with our dual horizontal bar charts. These charts highlight the top 10 antibiotics and organisms with 
                            the lowest susceptibility rates, adjusting dynamically based on any filters you apply, including specific medical services like General Medicine. 
                            Without filters, the charts show general trends across all data. Each bar details the antibiotic or organism name, susceptibility rate, 
                            and total tests or isolates. A colored dot indicates the general trend without filters, allowing for easy comparisons. For instance, 
                            while Ampicillin’s overall susceptibility rate might be 46%, it drops to 29% under the General Medicine service, 
                            providing critical insights for informed decision-making.
                            </p>
                        </div>
                        <div className="image-container">
                            <img src="https://via.placeholder.com/426x240" alt="Feature Image"/>
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
                            <img src="https://via.placeholder.com/426x240" alt="Feature Image"/>
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
                            <img src="https://via.placeholder.com/426x240" alt="Feature Image"/>
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
                            <img src="https://via.placeholder.com/426x240" alt="Feature Image"/>
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
                <div className="carousel-container">
                    <Carousel/>
                </div>
            </section>
            
            <section id="contact_me_section" className="tab--contact_me">
                <h1>Contact Me</h1>
            </section>
        </main>
    )
}