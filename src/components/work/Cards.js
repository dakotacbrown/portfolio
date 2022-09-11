import React from "react";
import health from "../../img/health.png";
import place from "../../img/place2022.png";
import portfolio from "../../img/kim-portfolio.png";
import vauven from "../../img/vauven.png";

export default function Cards() {
    return (
        <>
            <div className="container-fluid pt-5 pb-5">
                <div className="container">
                    <p className="heading-large text-center">Work</p>
                    <p className="hero-subtext text-break">Here are recent projects I've worked on. If you like to learn more about what I'm up to, I'm always happy to connect on <a className="hero-subtext-link" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/dakotacbrown/">LinkedIn</a> or via <a className="hero-subtext-link" href="mailto:dakotacbrown@gmail.com">email</a>, so please feel free to reach out.</p>
                    <p className='heading pt-5'>DATA ENGINEERING PROJECTS</p>
                    <div className="container box">
                        <div className="row">
                            <div className="col-lg-7 pt-5 pl-5 pr-5">
                                <span className="box-header">REDDIT R/PLACE DATA PIPELINE</span><br />
                                <span>Reddit's R/Place had only four guidelines: There is an empty canvas. You may place a tile upon it, but you must wait to place another. Individually you can create something. Together you can create something more. With over 30GBs of data extracted from Reddit, I created a pipeline to transform data from 2017 and 2022 into a star schema design and loaded that into a data warehouse. Lastly, I used QuickSight to visualize the data. <a className="box-link" target="_blank" rel="noreferrer" href="https://github.com/dakotacbrown/Reddit-Data-Pipeline/blob/main/assets/Dashboard.pdf">Click here</a> or the picture to the right to view a visualization of the data.</span>
                                <div className="row">
                                    <div className="col-auto"><span className="box-tag">PYTHON</span></div>
                                    <div className="col-auto"><span className="box-tag">EC2</span></div>
                                    <div className="col-auto"><span className="box-tag">EMR</span></div>
                                    <div className="col-auto"><span className="box-tag">S3</span></div>
                                    <div className="col-auto"><span className="box-tag">REDSHIFT</span></div>
                                    <div className="col-auto"><span className="box-tag">QUICKSIGHT</span></div>
                                </div>
                                <p className="text-right"><a className="box-link" target="_blank" rel="noreferrer" href="https://github.com/dakotacbrown/Reddit-Data-Pipeline">VISIT PROJECT &#8811;</a></p>
                            </div>
                            <div className="d-flex align-items-center col-lg-5 pt-5 pb-5 pl-5 pr-5">
                                <a target="_blank" rel="noreferrer" href="https://github.com/dakotacbrown/Reddit-Data-Pipeline/blob/main/assets/Dashboard.pdf"><img className="img-fluid box-img" alt="Place 2022 Portrait" src={place} /></a>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="container box pb-5">
                        <div className="row">
                            <div className="col-lg-7 pt-5 pl-5 pr-5">
                                <span className="box-header">THE WORLD BANK MEDICAL DATA PIPELINE</span><br />
                                <span>Using The World Bank's API, I extracted specific data from The World Health Organization in regards to the United States healthcare costs and accessibility versus other countries with socialized healthcare. I then created a pipeline, transformed the data into a star schema, and loaded it into a data warehouse. Finally, I used Tableau to visualize the data. <a className="box-link" target="_blank" rel="noreferrer" href="https://public.tableau.com/app/profile/dakota.cheyenne.brown/viz/Capstone1Visualization_16604991072950/HealthCarein2009vs2019">Click here</a> or the picture to the right to view a visualization of the data.</span>
                                <div className="row">
                                    <div className="col-auto"><span className="box-tag">PYTHON</span></div>
                                    <div className="col-auto"><span className="box-tag">EC2</span></div>
                                    <div className="col-auto"><span className="box-tag">EMR</span></div>
                                    <div className="col-auto"><span className="box-tag">S3</span></div>
                                    <div className="col-auto"><span className="box-tag">REDSHIFT</span></div>
                                    <div className="col-auto"><span className="box-tag">TABLEAU</span></div>
                                </div>
                                <p className="text-right"><a className="box-link" target="_blank" rel="noreferrer" href="https://github.com/dakotacbrown/Medical-Data-Pipeline">VISIT PROJECT &#8811;</a></p>
                            </div>
                            <div className="d-flex align-items-center col-lg-5 pt-5 pl-5 pr-5">
                                <a target="_blank" rel="noreferrer" href="https://public.tableau.com/app/profile/dakota.cheyenne.brown/viz/Capstone1Visualization_16604991072950/HealthCarein2009vs2019"><img className="img-fluid box-img" alt="Healthcare Visualizations" src={health} /></a>
                            </div>
                        </div>
                    </div>
                    <br/><br/>
                    <p className='heading'>OTHER RECENT WORK</p>
                    <div className="container box">
                        <div className="row">
                            <div className="col-lg-7 pt-5 pl-5 pr-5">
                                <span className="box-header">VAUVEN COMPANY WEBSITE</span><br />
                                <span>I was approached by the CEO of a startup to create the website for their company showcasing their app Haven Station. Together with a product designer, I programmed the company's website in 100 hours. Using ReactJS and Bootstrap, I was able to craft the website of the CEO's dreams.</span>
                                <div className="row">
                                    <div className="col-auto"><span className="box-tag">REACT JS</span></div>
                                    <div className="col-auto"><span className="box-tag">BOOTSTRAP 4</span></div>
                                </div>
                                <p className="text-right"><a className="box-link" target="_blank" rel="noreferrer" href="https://vauven.com">VISIT PROJECT &#8811;</a></p>
                            </div>
                            <div className="d-flex align-items-center col-lg-5 pt-5 pb-5 pl-5 pr-5">
                                <a target="_blank" rel="noreferrer" href="https://vauven.com"><img className="img-fluid box-img" alt="Vauven Website" src={vauven} /></a>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="container box pb-5">
                        <div className="row">
                            <div className="col-lg-7 pt-5 pl-5 pr-5">
                                <span className="box-header">A PRODUCT DESIGNER'S PORTFOLIO</span><br />
                                <span>A product designer wanted to create a portfolio showing off their recent works. In order to incorporate their pixel perfect designs and vision, I worked closely with them to create their portfolio. This project exemplifies an attention to detail that was given the "okay" by someone who makes it their business.</span>
                                <div className="row">
                                    <div className="col-auto"><span className="box-tag">REACT JS</span></div>
                                    <div className="col-auto"><span className="box-tag">BOOTSTRAP 4</span></div>
                                </div>
                                <p className="text-right"><a className="box-link" target="_blank" rel="noreferrer" href="https://kim-tellez.github.io/ux-ui-portfolio/">VISIT PROJECT &#8811;</a></p>
                            </div>
                            <div className="d-flex align-items-center col-lg-5 pt-5 pl-5 pr-5">
                                <a target="_blank" rel="noreferrer" href="https://kim-tellez.github.io/ux-ui-portfolio/"><img className="img-fluid box-img" alt="Product Designer's Portfolio" src={portfolio} /></a>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </>
    );
}