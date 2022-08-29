import React from "react";
import classroom from "../img/dakota-classroom.jpg";
import music from "../img/miguel-dakota.jpg";
import pc_yid from "../img/dakota-teaching.png";
import pc_si from "../img/dakota-pc.jpg";
import paper from "../img/dakota-paper.jpg";
import robots from "../img/dakota-robots.jpg";
import camp from "../img/dakota-camp.jpg";
import programming from "../img/dakota-programming.jpg";
import austin from "../img/open-austin.png";
import work from "../img/dakota-work.png";
import paint from "../img/dakota-paint.png";
import pose from "../img/dakota-hr.png";

export default function Volunteering() {
    return (
        <>
            <div className="container-fluid pt-5 pb-5">
                <div className="container">
                <p className="heading-large text-center">Volunteering</p>
                <p className="hero-subtext text-break">Volunteering is a pillar of being a servant-leader. I've traveled hundreds of miles either by car, bus, plane, or tuk-tuk to go where I'm needed. Here are some pictures from my past few years.</p>
                    <p className="heading pt-5">PEACE CORPS VOLUNTEER</p>
                    <div className="row pb-5">
                        <div className="col-auto col-sm-6 col-lg-3 pb-3">
                            <p><img className="img-fluid vol-img" alt="Dakota with students in a classroom cooking" src={classroom} /></p>
                            <p className="caption">Youth &amp; Development Facilitator<br/>Guatemala, 2018 &#8212; 2019</p>
                        </div>
                        <div className="col-auto col-sm-6 col-lg-3 pb-3">
                            <p><img className="img-fluid vol-img" alt="Dakota with a student and instruments" src={music} /></p>
                            <p className="caption">Youth &amp; Development Facilitator<br/>Guatemala, 2018 &#8212; 2019</p>
                        </div>
                        <div className="col-auto col-sm-6 col-lg-3 pb-3">
                            <p className=""><img className="img-fluid vol-img" alt="Dakota and another volunteer teaching students" src={pc_yid} /></p>
                            <p className="caption">Youth &amp; Development Facilitator<br/>Guatemala, 2018 &#8212; 2019</p>
                        </div>
                        <div className="col-auto col-sm-6 col-lg-3 pb-3">
                            <p className=""><img className="img-fluid vol-img" alt="Dakota at the Peace Corps swear-in ceremony" src={pc_si} /></p>
                            <p className="caption">Youth &amp; Development Facilitator<br/>Guatemala, 2018 &#8212; 2019</p>
                        </div>
                    </div>
                    <p className="heading">AMERICORPS VOLUNTEER</p>
                    <div className="row pb-5">
                        <div className="col-auto col-sm-6 col-lg-3 pb-3">
                            <p><img className="img-fluid vol-img" alt="Dakota helping at a school event" src={paper} /></p>
                            <p className="caption">Software &amp; Robotics Coordinator<br/>Baton Rouge, LA, 2017 &#8212; 2018</p>
                        </div>
                        <div className="col-auto col-sm-6 col-lg-3 pb-3">
                            <p><img className="img-fluid vol-img" alt="Dakota helping a child with a mini-robot" src={robots} /></p>
                            <p className="caption">Software &amp; Robotics Coordinator<br/>Baton Rouge, LA, 2017 &#8212; 2018</p>
                        </div>
                        <div className="col-auto col-sm-6 col-lg-3 pb-3">
                            <p><img className="img-fluid vol-img" alt="Dakota being a patient at a summer camp" src={camp} /></p>
                            <p className="caption">Software &amp; Robotics Coordinator<br/>Baton Rouge, LA, 2017 &#8212; 2018</p>
                        </div>
                        <div className="col-auto col-sm-6 col-lg-3 pb-3">
                            <p><img className="img-fluid vol-img" alt="Dakota coding with a child at an event" src={programming} /></p>
                            <p className="caption">Software &amp; Robotics Coordinator<br/>Baton Rouge, LA, 2017 &#8212; 2018</p>
                        </div>
                    </div>
                    <p className="heading">OTHER VOLUNTEER WORK</p>
                    <div className="row">
                        <div className="col-auto col-sm-6 col-lg-3 pb-3">
                            <p className=""><img className="img-fluid vol-img" alt="Dakota at the first in-person open austin event in two years" src={austin} /></p>
                            <p className="caption">Open Austin<br/>Austin, TX, 2022</p>
                        </div>
                        <div className="col-auto col-sm-6 col-lg-3 pb-3">
                            <p className=""><img className="img-fluid vol-img" alt="Dakota carrying lumber" src={work} /></p>
                            <p className="caption">Spring Break Service Trip<br/>Guatemala, 2017</p>
                        </div>
                        <div className="col-auto col-sm-6 col-lg-3 pb-3">
                            <p className=""><img className="img-fluid vol-img" alt="Dakota helping to paint a wall" src={paint} /></p>
                            <p className="caption">Spring Break Service Trip<br/>Guatemala, 2017</p>
                        </div>
                        <div className="col-auto col-sm-6 col-lg-3 pb-3">
                            <p className=""><img className="img-fluid vol-img" alt="Dakota with a child at a school" src={pose} /></p>
                            <p className="caption">Spring Break Service Trip<br/>Guatemala, 2017</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}