import React, { Component } from 'react';
import Stickers from './../Stickers/Stickers.js';
import List from './../List/List.js';
import GSheet from './../GSheet/GSheet.js';
import GDriveAPI from './../GDriveAPI/GDriveAPI.js';
import s from './Tabs.module.css';

class Tabs extends Component {
  constructor(props) {
    super(props);
  }
  openPage(event) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName(`${s.tabcontent}`);
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName(`${s.tab}`);
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(` ${s.active}`, "");
    }
    var elm = document.getElementById(event.currentTarget.name);
    elm.style.display = "block";
    event.currentTarget.className += ` ${s.active}`;
  }
  render() {
    return (
      <div>

        <div className={s.tab}>
          <button className={`${s.tab} ${s.active}`} name="Stickers" onClick={this.openPage}>Stickers</button>
          <button className={s.tab} name="List" onClick={this.openPage}>List</button>
          <button className={s.tab} name="GSheet" onClick={this.openPage}>GSheet</button>
          <button className={s.tab} name="GDriveAPI" onClick={this.openPage}>GDriveAPI</button>
        </div>

        <div id="Stickers" className={s.tabcontent} style={{ display: 'block' }}>
          <Stickers passRef={this.props.passRef} shared_var={this.props.shared_var} />
        </div>

        <div id="List" className={s.tabcontent} style={{ display: 'none' }} >
          <List shared_var={this.props.shared_var} />
        </div>

        <div id="GSheet" className={s.tabcontent} style={{ display: 'none' }} >
          <GSheet />
        </div>

        <div id="GDriveAPI" className={s.tabcontent} style={{ display: 'none' }} >
          <GDriveAPI ShareSpreedSheetId={this.props.ShareSpreedSheetId} />
        </div>

      </div>);
  }
}

export default Tabs;