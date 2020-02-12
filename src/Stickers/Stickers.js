import React, { Component } from 'react';
import s from './Stickers.module.css';
import Sticker from './Sticker/Sticker';

const pdfRef = React.createRef();
const countStickersInRow = 5;

class Stickers extends Component {

  buildStickersPage() {
    var stickers = this.props.stickers;

    var stickersPage = [];
    var stickersCounter = 0;
    var stickersRow = [];
    stickers.forEach(sticker => {

      stickersCounter++;
      stickersRow.push(<Sticker sticker={sticker} onMouseOver={this.props.mouseOverSticker} onMouseLeave={this.props.mouseLeaveSticker} 
        onStudied = {this.props.onStudied} />);

      if (stickersRow.length == countStickersInRow || stickers.length - stickersCounter == 0) {
        stickersPage.push(<div className={s.StickersRow}>{stickersRow}</div>);
        stickersRow = [];
      }
    });

    return stickersPage;
  }

  componentDidMount() {
    this.props.updatePdf(pdfRef);
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