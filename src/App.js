import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import { Route, BrowserRouter } from 'react-router-dom';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Profile from './components/Profile/Profile';
import { connect } from 'react-redux';
import { initializeApp } from './redux/appReducer';

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="wrapper"> 
          <Header />
          <Route path="/login" render={() => <Login />} />
          <Route path="/signup" render={() => <SignUp />} />
          <Route path="/profile" render={() => <Profile />} />
        </div>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default connect(mapStateToProps, { initializeApp })(App);
