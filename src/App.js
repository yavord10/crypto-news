import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch, Route} from 'react-router-dom';
import NavBar from "./Navbar";
import TopNews from "./TopNews";
import './App.css';
import News from './News';
import NewsPage from './NewsPage';
import Default from './Default';

class App extends Component {
  render() {
    return (      
      <React.Fragment>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={TopNews}/>
          <Route path="/newsarticle" component={NewsPage}/>
          <Route component={Default}/>
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
