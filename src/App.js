import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import { Route, BrowserRouter, withRouter, Redirect } from 'react-router-dom';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import MainPage from './components/MainPage/MainPage';
import { connect, Provider } from 'react-redux';
import { initializeApp } from './redux/appReducer';
import Preloader from './components/common/Preloader/Preloader';
import { compose } from 'redux';
import store from './redux/store';

const preloaderStyle = {
  width: '100%',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return (
        <div style={preloaderStyle}>
          <Preloader />
        </div>
      )
    }

    return (
      <div className="wrapper"> 
        <Redirect to="/login" />
        <Header />
        <Route path="/login" render={() => <Login />} />
        <Route path="/signup" render={() => <SignUp />} />
        <Route path="/mainpage" render={() => <MainPage />} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

let AppContainer = compose(withRouter, 
  connect(mapStateToProps, { initializeApp }))(App);


const MainApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>     
    </BrowserRouter>
  )
}

export default MainApp;
