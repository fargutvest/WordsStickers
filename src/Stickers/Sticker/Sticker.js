import React, { Component } from 'react';
import s from './Sticker.module.css';


class Sticker extends Component {
    render() {
      return (
        <div className={s.Sticker}>
              <div className={`${s.English} ${s.Part}`}>{this.props.data.English}</div>
              <div className={`${s.Spelling} ${s.Part}`}>{this.props.data.Spelling}</div>
              <div className={`${s.Russian} ${s.Part}`}>{this.props.data.Russian}</div>
        </div>
      );
    }
  }

  export default Sticker;