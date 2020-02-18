import React, { Component } from 'react';
import Home from './components/home/Home';
import './App.css';
import { Layout } from './components/Layout';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NavigationBar } from './components/navbar/NavigationBar';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />
          <Layout>
            <Switch> 
              <Route exact path="/" component={ Home }></Route>
            </Switch>
          </Layout>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
