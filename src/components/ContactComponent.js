import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Label, Col, Row} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors} from 'react-redux-form';

const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);
const isNumber = val => !isNaN(+val);
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            phoneNum: '',
            email: '',
            agree: false,
            contactType: 'By Phone',
            message: '',
            touched: {
                firstName: false,
                phoneNum: false,
                email: false
            }
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(values) {
        console.log("Current state is: " + JSON.stringify(values));
        alert('Current state is: ' + JSON.stringify(values));
       
    }

    render(){

        return (
            <div className="container">
                <div className="row">
                    <div className="col pt-5 text-center">
                        <h1>Contact Us</h1>
                        <hr />
                    </div>
                </div>
    
                <div className="row row-content text-center py-4">
                    <div className="col-sm-6">
                        <h4>Our Address</h4>
                        <address>
                            123 Address Street<br />
                            San Diego, CA 92000<br />
                        </address>
                    </div>
                    <div className="col">
                        <a role="button" className="text-dark btn btn-link" href="tel:+18001231234"><i className="fa fa-phone" /> 1-800-123-1234</a><br />
                        <a role="button" className="text-dark btn btn-link" href="mailto:RuffRuff@gmail.com"><i className="fa fa-envelope-o" /> RuffRuff@gmail.com</a>
                    </div>
                </div>
            
                <div className="row row-content">
                    <div className="col-12 text-center">
                        <h1>Get In Touch With Us</h1>
                        <hr />
                    </div>
                    <div className="col-md-10">
                        <LocalForm onSubmit={values => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Col md={{size:6, offset:4}}>
                                    <Control.text model ='.firstName' id="firstName" name="firstName"
                                        className='form-control'
                                        placeholder="First Name"
                                        validators={{
                                            required,
                                            minLength: minLength(2),
                                            maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".firstName"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be at least 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:6, offset:4}}>
                                    <Control.text model='.phoneNum' id="phoneNum" name="phoneNum"
                                        placeholder="Phone number"
                                        className='form-control'
                                        validators={{
                                            required,
                                            minLength: minLength(2),
                                            maxLength: maxLength(15),
                                            isNumber
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".phoneNum"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be at least 10 numbers',
                                            maxLength: 'Must be 15 numbers or less',
                                            isNumber: 'Must be a number'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:6, offset:4}}>
                                    <Control.text model='.email' id="email" name="email"
                                        placeholder="Email"
                                        className='form-control'
                                        validators={{
                                            required,
                                            validEmail
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".email"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                            validEmail: 'Invalid email address'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                            
                                <Col md={{size:6, offset:4}}>
                                    <Control.select model='.contactType' name="contactType"
                                        className='form-control'>
                                        <option selected disabled>Subject</option>
                                        <option>Boarding</option>
                                        <option>Dog Walking</option>
                                        <option>Grooming</option>
                                        <option>Other</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:6, offset:4}}>
                                    <Control.textarea model='..message'id="message" name="message"
                                        rows="12"
                                        className='form-control' placeholder='Your Message'
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:6, offset:4}}>
                                    <Button type="submit" color="primary">
                                        Send Message
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;