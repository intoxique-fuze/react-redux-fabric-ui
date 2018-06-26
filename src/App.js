import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './component/Header/Header';
import Content from './component/Content/Content';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
      </div>
    );
  }
}


export default connect(null)(App);
