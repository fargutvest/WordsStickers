import React, { Component } from 'react';
import StickersContainer from './../Stickers/StickersContainer.js';
import ListContainer from './../List/ListContainer.js';
import Video from './../Video/Video.js';
import PhrasebooksContainer from './../Phrasebooks/PhrasebooksContainer.js';
import s from './Tabs.module.css';
import { Route, NavLink } from "react-router-dom";

const url = '/EnglishWordsStickers';

class Tabs extends Component {

  render() {
    return (

      <div>
        <div className={s.tabpanel}>
          <div className={s.tab}>
            <NavLink exact to={`${url}/`} activeClassName={s.active}>Stickers</NavLink>
          </div>
          {/* <div className={s.tab}>
            <NavLink to={`${url}/video`} activeClassName={s.active}>How to use</NavLink>
          </div> */}
          <div className={s.tab}>
            <NavLink to={`${url}/list`} activeClassName={s.active}>Words list</NavLink>
          </div>
          <div className={s.tab}>
            <NavLink to={`${url}/phrasebooks`} activeClassName={s.active}>Phrasebooks list</NavLink>
          </div>
        </div>

        <div className={s.tabcontent}>
          <Route exact path={`${url}/`} render={() => <StickersContainer />} />
          {/* <Route path={`${url}/video`} component={Video} /> */}
          <Route path={`${url}/list`} render={() => <ListContainer />} />
          <Route path={`${url}/phrasebooks`} render={() => <PhrasebooksContainer />} />
        </div>
      </div>
    );
  }
}

export default Tabs;