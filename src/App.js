import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import Header from './components/Header';
import LandingPage from './components/LandingPage';
import NotFound from './components/NotFound';

import Spots from './containers/Spots';
import ViewSpot from './containers/ViewSpot';
import CreateSpot from './containers/CreateSpot';
import EditSpot from './containers/EditSpot';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <main className="container">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/spots" component={Spots} />
        <Route exact path="/spots/create" component={CreateSpot} />
        <Route path="/spots/:id/edit" component={EditSpot} />
        <Route path="/spots/:id" component={ViewSpot} />


        <Route path="*" component={NotFound} />
        </Switch>
      </main>
      </div>
    );
  }
}

export default App;
