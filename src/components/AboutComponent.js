import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';


function About(props) {


    return (
        <div className="container">
            <div className="row">
                <div className="col text-center my-5">
                    <h2>About Us</h2>
                    <hr />
                </div>
            </div>
            <div className="row row-content">
                <div className="offset-sm-1 col-sm-5 pt-5">
                    <h3>Our Mission</h3>
                    <p>Doggo ipsum waggy wags ur givin me a spook boof heckin angery woofer, stop it fren heck boof wow such tempt, boofers thicc. Fat boi dat tungg tho clouds, doggo.  Aqua doggo fat boi boofers, thicc. Lotsa pats pupper shibe floofs, blop. Big ol pupper heckin good boys and girls shoober, ur givin me a spook. Stop it fren heckin angery woofer shibe porgo blop, very taste wow very hand that feed shibe puggo. Pupper heck floofs heck thicc long woofer, woofer yapper lotsa pats many pats. Sub woofer ruff stop it fren woofer big ol pupper, noodle horse corgo.</p>
                </div>
                <div className="col-sm-5">
                    <img src={'https://images.unsplash.com/photo-1555084227-36e282495e1c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=938&q=80'} width={400} height={400} />
                </div>
                <div className="col">
                    
                </div>
            </div>
        </div>
    );
}

export default About;