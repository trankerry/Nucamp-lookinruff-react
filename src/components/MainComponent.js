import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Example from './CarouselComponent';
// import Home from './HomeComponent';
import Contact from './ContactComponent';
// import About from './AboutComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

class Main extends Component {
    render() { 
        return ( 
            <div>
                <Header />
                {/* <Example /> */}
                <Switch>
                    <Route exact path='/contactus' component={Contact} />
                </Switch>
                <Footer />
            </div>
         );
    }
}
 
export default withRouter(Main);