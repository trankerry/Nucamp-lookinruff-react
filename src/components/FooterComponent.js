import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <div className="site-footer container-fluid py-0 mt-3 mb-0 justify-content-center text-light" id="footer">
            <footer className="container">
                <div className="row mt-5 justify-content-center py-5">
                    <div className="col-11">
                        <div className="row ">
                            <div className="col-xl-8 col-md-4 col-sm-4 col-12 my-auto mx-auto a">
                            <h3 className="mb-md-0 mb-5 bold-text">Lookin' Ruff 🐶</h3>
                            <p>All-in-one dog service.</p>
                            </div>
                            <div className="col-xl-2 col-md-4 col-sm-4 col-12">
                            <h6 className="mb-3 mb-lg-4 bold-text "><b>MENU</b></h6>
                            <ul className="list-unstyled">
                            <li><Link className="text-white no-underline" to='/home'>Home</Link></li>
                            <li><Link className="text-white no-underline" to='/home' to='/directory'>Directory</Link></li>
                            <li><Link className="text-white no-underline" to='/home' to='/aboutus'>About</Link></li>
                            <li><Link className="text-white no-underline" to='/home' to='/contactus'>Contact</Link></li>
                            </ul>
                            </div>
                            <div className="col-xl-2 col-md-4 col-sm-4 col-12">
                            <h6 className="mb-3 mb-lg-4 bold-text mt-sm-0 mt-5"><b>ADDRESS</b></h6>
                            <p className="mb-1">123, Address Street</p>
                            <p>San Diego, CA 92000</p>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-xl-8 col-md-4 col-sm-4 col-auto my-md-0 mt-5 order-sm-1 order-3 align-self-end">
                            <p className="social text-muted mb-0 pb-0 bold-text"> <span className="mx-2"><i className="fa fa-facebook"
                                    aria-hidden="true"></i></span> <span className="mx-2"><i className="fa fa-linkedin-square"
                                    aria-hidden="true"></i></span> <span className="mx-2"><i className="fa fa-twitter"
                                    aria-hidden="true"></i></span> <span className="mx-2"><i className="fa fa-instagram"
                                    aria-hidden="true"></i></span> </p><small className="rights"><span>&#174;</span> Lookin' Ruff 🐶<br/> All Rights
                                Reserved.</small>
                            </div>
                            <div className="col-xl-2 col-md-4 col-sm-4 col-auto order-1 align-self-end ">
                            <h6 className="mt-55 mt-2 bold-text"><b>Kerry Tran</b></h6>
                            <a href="mailto:Owner1@gmail.com" className="no-underline text-white"><small> <span><i className="fa fa-envelope"
                                aria-hidden="true"></i></span> mail@gmail.com</small></a>
                            </div>
                            <div className="col-xl-2 col-md-4 col-sm-4 col-auto order-2 align-self-end mt-3 ">
                            <h6 className="bold-text"><b>Lookin' Ruff</b></h6>
                            <a href="mailto:Owner@gmail.com" className="no-underline text-white"><small> <span><i className="fa fa-envelope"
                                aria-hidden="true"></i></span> RuffRuff@gmail.com</small></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
        // <footer className="site-footer">
        //     <div className="container">
        //         <div className="row">             
        //             <div className="col-4 text-center">
        //                 <h5>Links</h5>
        //                 <ul className="list-unstyled">
        //                     <li><a href="#">Home</a></li>
        //                     <li><a href="#">Directory</a></li>
        //                     <li><a href="#">About</a></li>
        //                     <li><a href="#">Contact</a></li>
        //                 </ul>
        //             </div>
        //             <div className="col-4 text-center">
        //                 <h5>Social</h5>
        //                 <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
        //                 <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '}
        //                 <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
        //                 <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube" /></a> 
        //             </div>
        //             <div className="col-4 text-center">
        //                 <a role="button" className="btn btn-link" href="tel:+12065551234"><i className="fa fa-phone" /> 1-206-555-1234</a><br />
        //                 <a role="button" className="btn btn-link" href="mailto:notreal@notreal.co"><i className="fa fa-envelope-o" /> campsites@nucamp.co</a>
        //             </div>
        //         </div>
        //     </div>
        // </footer>
    );
}

export default Footer;