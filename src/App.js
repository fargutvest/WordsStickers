import React, { Component } from 'react';
import s from './App.module.css';
import Header from './Header/Header.js';
import Navbar from './Navbar/Navbar.jsx';
import Content from './Content/Content.jsx';
import Footer from './Footer/Footer.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={s.app_wrapper}>
        <Header store={this.props.store}></Header>
        <Navbar store={this.props.store}/>
        <Content store={this.props.store} />
        <Footer />
      </div>
    );
  }
}

export default App;
