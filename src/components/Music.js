import React from "react";
import song1 from "../img/song1.mp4";
import song2 from "../img/song2.mp4";
import song3 from "../img/song3.mp4";
import song4 from "../img/song4.mp4";
import song5 from "../img/song5.mp4";

export default function Music() {
    return (
        <>
            <div className="container-fluid pt-5 pb-5">
                <div className="container">
                <p className="heading-large text-center">Music</p>
                <p className="hero-subtext text-break">One of my passions/hobbies is creating music. Music has been an important part of my life and I hope to one day create an album. Until then, please enjoy some of the art I've created over the past few years.<br/><br/><b>DISCLAIMER:</b> As I am a novice musician, some of the mixing is different between the tracks. Please be aware if you are using headphones.</p>
                    <p className="heading pt-5">NEWER SOUNDS</p>
                    <div className="row pb-5">
                        <div className="col-auto">
                            <video width="320" height="240" controls>
                                <source src={song5} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <p className="caption">Falling Stars<br/>Jan 2, 2021</p>
                        </div>
                    </div>
                    <p className="heading pt-5">MACHINES IN HARMONY EP</p>
                    <div className="row pb-5">
                        <div className="col-auto col-sm-6 col-lg-3">
                            <video width="240" height="240" controls>
                                <source src={song1} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <p className="caption">Machines in Harmony<br/>Aug 5, 2018</p>
                        </div>
                        <div className="col-auto col-sm-6 col-lg-3">
                            <video width="240" height="240" controls>
                                <source src={song2} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <p className="caption">Drifting Pulsations<br/>Aug 21, 2018</p>
                        </div>
                        <div className="col-auto col-sm-6 col-lg-3">
                            <video width="240" height="240" controls>
                                <source src={song3} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <p className="caption">Water Rings<br/>Nov 17, 2018</p>
                        </div>
                        <div className="col-auto col-sm-6 col-lg-3">
                            <video width="240" height="240" controls>
                                <source src={song4} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <p className="caption">Sunshine Thru Clouds<br/>Jun 5, 2019</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}