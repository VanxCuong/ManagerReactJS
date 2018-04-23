import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import News from './News';
import {connect} from 'react-redux';
class App extends Component {
  render() {
    console.log(this.props.dulieu);
    return (
      
      
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <News dl={this.props.dulieu}></News>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {  
    dulieu: state.num
  }
}
export default  connect(mapStateToProps)(App);
