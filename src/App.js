import React, {Component} from 'react';
import './App.css';

import {Switch, Route} from 'react-router-dom';

import AddABookPage from './pages/add-a-book/add-a-book-page';
import HomePage from './pages/homepage/homepage';



class App extends Component {
  render () {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/addabook' component={AddABookPage}/>
        </Switch>
      </div>
    )
  } 
}

export default App;

