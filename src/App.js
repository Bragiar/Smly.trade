import React, { Component } from 'react'
import Helmet from 'react-helmet';
import { Route, Switch, withRouter } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import './styles.css';

import Header from './components/header';

import Home from './routes/home';
import GetStarted from './routes/getstarted';
import About from './routes/about';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main className="main">
          <Helmet defaultTitle="SmileyCoin" titleTemplate="%s - SmileyCoin"/>
          <Header />

          <div className="main_content">
            <Switch location={this.props.location}>
              <Route path="/" exact component={Home} />
              <Route path="/getstarted" component={GetStarted} />
              <Route path="/about" component={About} />
            </Switch>
          </div>
        </main>


      </div>
    );
  }
}

export default App;
