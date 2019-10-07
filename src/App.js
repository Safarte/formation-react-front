import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import BoardsList from './components/BoardsList';
import Board from './components/Board';
import Login from './components/Login';


// Set this to true in order to use the login page
const USE_LOGIN = false;
// Set this to true in order to use the boards list page
const USE_BOARDSLIST = false;


const BoardsListComponent = USE_BOARDSLIST ? BoardsList : Board;
const LoginComponent = USE_LOGIN ? Login : BoardsListComponent;

function App() {
  return (
      <div className='App'>
        <Switch id='switch'>
          <Route exact path='/' component={LoginComponent}/>
          <Route exact path='/boards' component={BoardsListComponent}/>
          <Route path='/board/:id' component={Board}/>
        </Switch>
      </div>
  );
}

export default withRouter(App);
