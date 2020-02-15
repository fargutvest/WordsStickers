import React, { Component } from 'react';
import StickersContainer from './../Stickers/StickersContainer.js';
import ListContainer from './../List/ListContainer.js';
import Video from './../Video/Video.js';
import GDriveContainer from './../GDrive/GDriveContainer.js';
import s from './Tabs.module.css';
import { Route, NavLink } from "react-router-dom";

const url = '/EnglishWordsStickersJS';

class Tabs extends Component {

  render() {
    return (

      <div>
        <div className={s.tabpanel}>
          <div className={s.tab}>
            <NavLink exact to={`${url}/`} activeClassName={s.active}>Stickers</NavLink>
          </div>
          <div className={s.tab}>
            <NavLink to={`${url}/video`} activeClassName={s.active}>How to use</NavLink>
          </div>
          <div className={s.tab}>
            <NavLink to={`${url}/list`} activeClassName={s.active}>List</NavLink>
          </div>
          <div className={s.tab}>
            <NavLink to={`${url}/gdriveapi`} activeClassName={s.active}>GDriveAPI</NavLink>
          </div>
        </div>

        <div className={s.tabcontent}>
          <Route exact path={`${url}/`} render={() => <StickersContainer />} />
          <Route path={`${url}/video`} component={Video} />
          <Route path={`${url}/list`} render={() => <ListContainer />} />
          <Route path={`${url}/gdriveapi`} render={() => <GDriveContainer />} />
        </div>
      </div>
    );
  }
}

export default Tabs;