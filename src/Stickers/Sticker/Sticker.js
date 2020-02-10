import React, { Component } from 'react';
import s from './Sticker.module.css';


class Sticker extends Component {
  constructor(props) {
    super(props);
  }

  onMouseOver = () => {
    this.props.onMouseOver(this.props.sticker.id);
  }

  onMouseLeave = () => {
    this.props.onMouseLeave(this.props.sticker.id);
  }

  onClick = () => {
    this.props.onStudied({ stickerId: this.props.sticker.id, isStudied: !this.props.sticker.isStudied })
  }

  render() {
    let sticker = this.props.sticker;

    var mo = sticker.isMouseOver ? s.MouseOver : "";
    var st = sticker.isStudied ? s.Studied : ""
    return (
      <div className={`${s.Sticker} ${mo} ${st}`} onMouseOver={this.onMouseOver} onMouseLeave={this.onMouseLeave} onClick={this.onClick}>
        <div className={`${s.English} ${s.Part}`}>{sticker.content.English}</div>
        <div className={`${s.Spelling} ${s.Part}`}>{sticker.content.Spelling}</div>
        <div className={`${s.Russian} ${s.Part}`}>{sticker.content.Russian}</div>
      </div>
    );
  }
}

export default Sticker;