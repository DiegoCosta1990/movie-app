import React, { Component } from 'react';  
import './App.css';
import 'bulma/css/bulma.css';
import { Switch, Route } from 'react-router-dom';
import { Home } from '../src/pages/Home';
import { Detail } from '../src/pages/Details';
import { NotFound } from '../src/pages/NotFound';


class App extends Component {
  render(){
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/detail/:movieId' component={Detail}/>
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}
export default App;
