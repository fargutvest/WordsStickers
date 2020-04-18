import React, { Component } from 'react';
import s from './App.module.css';
import Header from './Header/Header.js';
import NavbarContainter from './Navbar/NavbarContainer'
import Content from './Content/Content.jsx';
import Footer from './Footer/Footer.jsx';
import SplashScreen from './Components/SplashScreen/SplashScreen';

class App extends Component {

  render() {
    return (
      <div className={s.app_wrapper}>
        {/* <Header /> */}
         {this.props.isFetchingStickers || this.props.isGeneratingPdf ? <SplashScreen /> : "" }
        <NavbarContainter />
        <Content />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
