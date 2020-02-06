import React, { Component } from 'react';
import Stickers from './../Stickers/Stickers.js';
import List from './../List/List.js';
import GSheet from './../GSheet/GSheet.js';
import GDrive from './../GDrive/GDrive.js';
import s from './Tabs.module.css';
import {
  BrowserRouter,
  Route, NavLink
} from "react-router-dom";

const url = '/EnglishWordsStickersJS';

class Tabs extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <div className={s.tabpanel}>
            <div className={s.tab}>
              <NavLink exact to= {`${url}/`} activeClassName={s.active}>Stickers</NavLink>
            </div>
            <div className={s.tab}>
              <NavLink to={`${url}/list`} activeClassName={s.active}>List</NavLink>
            </div>
            <div className={s.tab}>
              <NavLink to={`${url}/gsheet`} activeClassName={s.active}>GSheet</NavLink>
            </div>
            <div className={s.tab}>
              <NavLink to={`${url}/gdriveapi`} activeClassName={s.active}>GDriveAPI</NavLink>
            </div>
          </div>
   
          <div className={s.tabcontent}>
            <Route exact path={`${url}/`} render={() => <Stickers stickers={this.props.stickers} dispatch={this.props.dispatch} />} />
            <Route path={`${url}/list`} render={() => <List stickers={this.props.stickers} />} />
            <Route path={`${url}/gsheet`} component={GSheet} />
            <Route path={`${url}/gdriveapi`} render={() => <GDrive filesList={this.props.filesList} dispatch={this.props.dispatch} />} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Tabs;