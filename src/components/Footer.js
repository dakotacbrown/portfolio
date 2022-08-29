import React from 'react';
import './css/footer.css';
import logo from "../img/footer.png";
import linkedin from "../img/linkedin.png";
import github from "../img/github.png";
import gmail from "../img/gmail.png";
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <footer className="page-footer pt-5 pb-5">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-6 d-flex flex-row flex-column pl-lg-5">
                        <Link to="/">
                            <img className="img-fluid img-large" alt="Website logo" src={logo} />
                        </Link>
                    </div>
                    <div className="col-6 d-flex flex-sm-row-reverse flex-column-reverse text-right d-lg-none d-xl-none d-inline-flex d-sm-inline-flex d-md-inline-flex">
                        <div className="pl-5"><a className="text-decoration-none ft-lnk" target="_blank" rel="noreferrer" href="mailto:dakotacbrown@gmail.com">Email</a></div>
                        <div className="pl-5"><a className="text-decoration-none ft-lnk" target="_blank" rel="noreferrer" href="https://github.com/dakotacbrown">Github</a></div>
                        <div className="pl-5"><a className="text-decoration-none ft-lnk" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/dakotacbrown/">Linkedin</a></div>
                    </div>
                    <div className="col-6 d-none d-lg-flex flex-lg-row-reverse pr-5 d-md-none d-lg-inline-flex">
                        <div className="pl-5"><a className="text-decoration-none ft-lnk" target="_blank" rel="noreferrer" href="mailto:dakotacbrown@gmail.com"><img className="img-fluid" alt="Gmail logo" src={gmail} /></a></div>
                        <div className="pl-5"><a className="text-decoration-none ft-lnk" target="_blank" rel="noreferrer" href="https://github.com/dakotacbrown"><img className="img-fluid" alt="Github logo" src={github} /></a></div>
                        <div className="pl-5"><a className="text-decoration-none ft-lnk" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/dakotacbrown/"><img className="img-fluid" alt="Linkedin logo" src={linkedin} /></a></div>
                        
                    </div>
                </div>
            </div>
        </footer>

    );
}