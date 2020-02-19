import React, { Component } from 'react';
import preloader from './../../Assets/preloader.svg'
import s from './Preloader.module.css'

class Preloader extends Component {
  render() {
    return (
      <div className={s.preloader}>
        <img src={preloader} />
      </div>
    )
  }
}


export default Preloader;