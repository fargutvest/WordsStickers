import React, { Component } from 'react';
import s from './Sticker.module.css';


class Sticker extends Component {
  constructor(props) {
    super(props);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  onMouseOver() {
    this.props.onMouseOver(this.props.sticker.id);
  }

  onMouseLeave() {
    this.props.onMouseLeave(this.props.sticker.id);
  }

  render() {
    let sticker = this.props.sticker;

    var mo = sticker.isMouseOver ? s.MouseOver : "";
    return (
      <div className={`${s.Sticker} ${mo}`} onMouseOver={this.onMouseOver} onMouseLeave={this.onMouseLeave}>
        <div className={`${s.English} ${s.Part}`}>{sticker.content.English}</div>
        <div className={`${s.Spelling} ${s.Part}`}>{sticker.content.Spelling}</div>
        <div className={`${s.Russian} ${s.Part}`}>{sticker.content.Russian}</div>
      </div>
    );
  }
}

export default Sticker;