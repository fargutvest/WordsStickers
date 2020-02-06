import React, { Component } from 'react';
import s from './Stickers.module.css';
import Sticker from './Sticker/Sticker';
import { updatePdfActionCreator } from './../redux/stickers-reducer';

const pdfRef = React.createRef();
const countStickersInRow = 5;

class Stickers extends Component {
  constructor(props) {
    super(props);
  }

  buildStickersPage() {
    var stickers = this.props.stickers;

    var stickersPage = [];
    var stickersCounter = 0;
    var stickersRow = [];
    stickers.forEach(sticker => {

      stickersCounter++;
      stickersRow.push(<Sticker data={sticker} />);

      if (stickersRow.length == countStickersInRow || stickers.length - stickersCounter == 0) {
        stickersPage.push(<div className={s.StickersRow}>{stickersRow}</div>);
        stickersRow = [];
      }
    });

    return stickersPage;
  }

  componentDidMount() {
    this.props.dispatch(updatePdfActionCreator(pdfRef));
  }

  render() {
    return (
      <div className={s.main} ref={pdfRef}>
        {this.buildStickersPage()}
      </div>
    )
  }
}




export default Stickers;