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
        <Header spreadseetId={this.props.state.spreadsheetPage.spreadseetId} pdf={this.props.state.stickersPage.pdf} dispatch={this.props.dispatch}></Header>
        <Navbar isSignedIn ={this.props.state.signInPage.isSignedIn}  profile = {this.props.state.signInPage.profile} error={this.props.state.errorPage.error} dispath={this.props.dispatch} />
        <Content stickers={this.props.state.stickersPage.stickers} filesList={this.props.state.filesListPage.filesList} dispatch={this.props.dispatch} />
        <Footer />
      </div>
    );
  }
}

export default App;
