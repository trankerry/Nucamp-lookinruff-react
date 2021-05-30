import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

class Main extends Component {

    render() { 
        return ( 
            <div>
                <Header />
                <Home />
                <Switch>
                    <Route exact path='/home' component={Home} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/contactus' component={Contact} />
                </Switch>
                <Footer />
            </div>
         );
    }
}
 
export default withRouter(Main);