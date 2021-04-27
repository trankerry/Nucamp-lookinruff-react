import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label } from 'reactstrap';
// import { NavLink } from 'react-router-dom';

class Header extends Component {
    render() { 
        return (
            <>
                <Jumbotron fluid>
                    <div className="container">
                        <div className='row'>
                            <div className='col py-5'>
                                <h1>Hello</h1>
                                <h2>helloworld</h2>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Navbar dark sticky='top'>
                    
                </Navbar>
            </>
        );
    }
}
 
export default Header;