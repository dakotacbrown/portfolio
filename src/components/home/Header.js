import React from "react";
import Dakota from "../../img/dakota.png";
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <>
            <div className="container-fluid pt-5">
                <div className="container pt-5">
                    <div className="row flex-lg-row-reverse flex-md-row-reverse flex-sm-row">
                        <div className="col-lg-6 order-1">
                            <p className="hero-header text-break">Hello, I'm Dakota-Cheyenne Brown. I'm passionate about <Link className="hero-header-link" to={"/work"}>data</Link>, <Link className="hero-header-link" to={"/fun/volunteering"}>volunteering</Link>, and <Link className="hero-header-link" to={"/fun/music"}>music</Link>.</p>
                            <p className="hero-subtext text-break">Since you're already here, thanks for checking out my work! If we haven't already, I'm always happy to connect on <a className="hero-subtext-link" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/dakotacbrown/">LinkedIn</a> or via <a className="hero-subtext-link" href="mailto:dakotacbrown@gmail.com">email</a>, so please feel free to reach out.</p>
                        </div>
                        <div className="col-lg-6 d-flex justify-content-center order-0 pb-5">
                            <img className="img-fluid" alt="Dakota-Cheyenne Brown" src={Dakota} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}