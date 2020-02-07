import React, { Component } from 'react';
import StickersContainer from './../Stickers/StickersContainer.js';
import ListContainer from './../List/ListContainer.js';
import GSheet from './../GSheet/GSheet.js';
import GDriveContainer from './../GDrive/GDriveContainer.js';
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
            <Route exact path={`${url}/`} render={() => <StickersContainer store={this.props.store} />} />
            <Route path={`${url}/list`} render={() => <ListContainer store={this.props.store} />} />
            <Route path={`${url}/gsheet`} component={GSheet} />
            <Route path={`${url}/gdriveapi`} render={() => <GDriveContainer store={this.props.store} />} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Tabs;