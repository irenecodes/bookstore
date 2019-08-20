import React, {Component} from 'react';
import './App.css';

import { connect } from 'react-redux';

import {Switch, Route} from 'react-router-dom';

import AddABookPage from './pages/add-a-book/add-a-book-page';
import HomePage from './pages/homepage/homepage';

import EditPage from './pages/edit/edit-page';



class App extends Component {
  render () {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/addabook' component={AddABookPage}/>
          <Route 
            path ='/editbook' 
            // render={(books => <EditPage books={ books }/>)}
            component={EditPage} 
          />
        </Switch>
      </div>
    )
  } 
}

const mapStateToProps = ({ book: { books } }) => ({
  books
})

export default connect(mapStateToProps)(App);

