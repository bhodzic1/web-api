import React, { Component } from 'react';
import Home from './components/home/Home';
import './App.css';
import { Layout } from './components/Layout';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NavigationBar } from './components/navbar/NavigationBar';
import Gif from './components/gif/Gif';
import Temp from './components/temp/Temp';
import GifView from './components/gifview/GifView';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />
          <Layout>
            <Switch> 
              <Route exact path="/" component={ Home }></Route>
              <Route path="/gif" component={ Gif }></Route>
              <Route path="/query/:image" component={ Temp }></Route>
              <Route path="/gifs/:name/:id" component={ GifView } />
            </Switch>
          </Layout>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
