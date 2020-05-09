import React, { Component } from 'react';
import s from './PlaySticker.module.css';


const PlaySticker = ({ mouseOverSticker, mouseLeaveSticker, studiedSticker, sticker }) => {

  let onMouseOverHandler = () => {
    mouseOverSticker(sticker.id);
  }

  let onMouseLeaveHandler = () => {
    mouseLeaveSticker(sticker.id);
  }

  let onClickHandler = () => {
    studiedSticker({ stickerId: sticker.id, isStudied: !sticker.isStudied })
  }

  var mouseOver = sticker.isMouseOver ? s.MouseOver : "";
  var studied = sticker.isStudied ? s.Studied : ""

  
  return (
    <div className={`${s.Sticker} ${mouseOver} ${studied}`} onMouseOver={onMouseOverHandler} onMouseLeave={onMouseLeaveHandler} onClick={onClickHandler}>
      <div className={`${s.Foreign} ${s.Part}`}>{sticker.content.Foreign}</div>
      {/* <div className={`${s.Spelling} ${s.Part}`}>{sticker.content.Spelling}</div> */}
      <div className={`${s.Native} ${s.Part}`}>{sticker.content.Native}</div>
    </div>
  );

}

export default PlaySticker;