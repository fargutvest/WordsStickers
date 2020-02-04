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
        <Header spreadseetId={this.props.state.spreadseetId} pdf={this.props.state.pdf} dispatch={this.props.dispatch}></Header>
        <Navbar error={this.props.state.error} />
        <Content stickers={this.props.state.stickers} filesList={this.props.state.filesList} dispatch={this.props.dispatch} />
        <Footer />
      </div>
    );
  }
}

export default App;
