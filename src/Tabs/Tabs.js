import React, { Component } from 'react';
import StickersContainer from './../Stickers/StickersContainer.js';
import ListContainer from './../List/ListContainer.js';
import Video from './../Video/Video.js';
import PhrasebooksContainer from './../Phrasebooks/PhrasebooksContainer.js';
import s from './Tabs.module.css';
import { Route, NavLink } from "react-router-dom";

class Tabs extends Component {

  render() {
    return (

      <div>
        <div className={s.tabpanel}>
          <div className={s.tab}>
            <NavLink exact to={`/`} activeClassName={s.active}>Stickers</NavLink>
          </div>
          {/* <div className={s.tab}>
            <NavLink to={`/video`} activeClassName={s.active}>How to use</NavLink>
          </div> */}
          <div className={s.tab}>
            <NavLink to={`/list`} activeClassName={s.active}>Words list</NavLink>
          </div>
          <div className={s.tab}>
            <NavLink to={`/phrasebooks`} activeClassName={s.active}>Phrasebooks list</NavLink>
          </div>
        </div>

        <div className={s.tabcontent}>
          <Route exact path={`/`} render={() => <StickersContainer />} />
          {/* <Route path={`/video`} component={Video} /> */}
          <Route path={`/list`} render={() => <ListContainer />} />
          <Route path={`/phrasebooks`} render={() => <PhrasebooksContainer />} />
        </div>
      </div>
    );
  }
}

export default Tabs;