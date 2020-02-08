import React, { Component } from 'react';
import s from './App.module.css';
import Header from './Header/Header.js';
import Navbar from './Navbar/Navbar.jsx';
import Content from './Content/Content.jsx';
import Footer from './Footer/Footer.jsx';

class App extends Component {

  render() {
    return (
      <div className={s.app_wrapper}>
        <Header />
        <Navbar />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
