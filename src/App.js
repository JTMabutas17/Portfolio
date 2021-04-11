import React, { Component } from 'react';
import Navbar from './components/Navbar'
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Hokage from './components/Hokage';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Navbar /> */}
        <Header />
        <About />
        <hr />
        <Experience />
        {/* 
        <hr />
        <Hokage /> */}
      </div>
    );
  }
}

export default App;