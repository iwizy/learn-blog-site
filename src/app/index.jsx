import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import Header from 'src/components/header';
import SignIn from 'src/pages/sign-in';
import SignUp from 'src/pages/sign-up';
import About from 'src/pages/about';
import NewPost from 'src/pages/new-post';

import * as Actions from './actions';
import './style.css';

class App extends Component {
  componentDidMount() {
    this.props.auth();
  }

  render() {
    return (
      <>
        <Header user={this.props.user} signOut={this.props.signOut} />
        <Switch>
          <Route path='/sign-in'>
            <SignIn />
          </Route>
          <Route path='/sign-up'>
            <SignUp />
          </Route>
          <Route path='/new-post'>
            <h1>New post</h1>
            <NewPost />
          </Route>
          <Route path='/about'>
            <h1>About</h1>
            <About />
          </Route>
          <Route path='/'>
            <h1>MAIN PAGE</h1>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi excepturi illum incidunt magni nam officia qui sed similique suscipit unde.
          </Route>
        </Switch>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    user: state.applicationReducer.user
  });
};

export default connect(mapStateToProps, Actions)(App);
