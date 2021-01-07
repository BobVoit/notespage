import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import { Route, BrowserRouter } from 'react-router-dom';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className="wrapper"> 
          <Header />
          <Route path="/login" render={() => <Login />} />
          <Route path="/signup" render={() => <SignUp />} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
