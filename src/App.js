import React, { Component } from 'react';
import characters from './Characters.js';
import s from './App.module.css';
import Header from './Header/Header.js';
import Navbar from './Navbar/Navbar.jsx';
import Content from './Content/Content.jsx';
import Footer from './Footer/Footer.jsx';
import './Common.css'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { state_ref: '', shared_var: characters, state_spreedSheetId: '' };
    this.updateShared = this.updateShared.bind(this);
    this.isSignedIn = this.isSignedIn.bind(this);
    this.passRef = this.passRef.bind(this);
    this.ShareSpreedSheetId = this.ShareSpreedSheetId.bind(this);
  }
  updateShared(shared_value) {
    this.setState({ shared_var: shared_value });
  }

  passRef(newRef) {
    this.setState({ state_ref: newRef });
  }

  isSignedIn(value, userProfile) {
    var avatarImg = document.getElementById("avatar");
    var titleLabel = document.getElementById("title");
    if (userProfile) {
      avatarImg.style.display = '';
      titleLabel.style.display = '';
      avatarImg.src = userProfile.getImageUrl();
      titleLabel.innerHTML = userProfile.getName();
    }
    else {
      avatarImg.style.display = 'none';
      titleLabel.style.display = 'none';
    }
  }

  ShareSpreedSheetId(spreedSheetId) {
    this.state.state_spreedSheetId = spreedSheetId;
    this.setState({ state_spreedSheetId: spreedSheetId });
  }

  render() {
    return (
      <div className={s.app_wrapper}>
        <Header params={this.props.match.params} spreedSheetId ={this.state.state_spreedSheetId} updateShared ={this.updateShared} da_ref = {this.state.state_ref}></Header>
        <Navbar params={this.props.match.params} shared_var={this.state.shared_var} callback={this.isSignedIn}></Navbar>
        <Content passRef={this.passRef} shared_var={this.state.shared_var} ShareSpreedSheetId={this.ShareSpreedSheetId} ></Content>
        <Footer/>
      </div>
    );
  }
}

export default App;
