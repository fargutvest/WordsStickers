import React, { Component } from 'react';
import Stickers from './../Stickers/Stickers.js';
import List from './../List/List.js';
import GSheet from './../GSheet/GSheet.js';
import GDriveAPI from './../GDriveAPI/GDriveAPI.js';
import s from './Tabs.module.css';
import {
  BrowserRouter,
  Route, NavLink
} from "react-router-dom";

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
              <NavLink to="/stickers" activeClassName={s.active}>Stickers</NavLink>
            </div>
            <div className={s.tab}>
              <NavLink to="/list" activeClassName={s.active}>List</NavLink>
            </div>
            <div className={s.tab}>
              <NavLink to="/gsheet" activeClassName={s.active}>GSheet</NavLink>
            </div>
            <div className={s.tab}>
              <NavLink to="/gdriveapi" activeClassName={s.active}>GDriveAPI</NavLink>
            </div>
          </div>

          <div className={s.tabcontent}>
            <Route path='/stickers' render={() => <Stickers updatePdf={this.props.updatePdf} stickers={this.props.stickers} />} />
            <Route path="/list" render={() => <List stickers={this.props.stickers} />} />
            <Route path="/gsheet" component={GSheet} />
            <Route path="/gdriveapi" render={() => <GDriveAPI updateSpreadsheetId={this.props.updateSpreadsheetId}
              filesList={this.props.filesList}
              updateFilesList={this.props.updateFilesList} />} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Tabs;