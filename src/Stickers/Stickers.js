import React, { Component } from 'react';
import s from './Stickers.module.css';
import Sticker from './Sticker/Sticker';
import { updatePdfActionCreator } from './../redux/stickers-reducer';

const pdfRef = React.createRef();
const countStickersInRow = 4;

class Stickers extends Component {
  constructor(props) {
    super(props);
  }

  buildStickersPage() {
    return this.props.stickers.map((row, index) => {
      return (
        <tr key={index}>
          <td><Sticker data={row[0]} /></td><td><Sticker data={row[1]} /></td><td><Sticker data={row[2]} /></td><td><Sticker data={row[3]} /></td>
        </tr>
      )
    });
  }


  // buildStickersPage() {
  //   var stickers = this.props.stickers;

  //   var stickersPage = [];
  //   var stickersCounter = 0;
  //   var stickersRow = [];
  //   stickers.forEach(sticker => {
      
  //     linesCounter++;
  //     stickersRow.push({
  //       English: lineCells[0],
  //       Spelling: "---",
  //       Russian: lineCells[1]
  //     })
  //     if (stickersRow.length == countStickersInRow || stickers.length - stickersCounter == 0) {
  //       var need = countStickersInRow - stickersRow.length;
  //       if (need > 0) {
  //         for (var i = 0; i < need; i++) {
  //           stickersRow.push({
  //             English: "---",
  //             Spelling: "---",
  //             Russian: "---"
  //           })
  //         }
  //       }
  //       stickersPage.push(stickersRow);
  //       stickersRow = [];
  //     }
  //   });

  //   var page = this.props.stickers.map((sticker, index) => {
  //     return (
  //       <a id={index}>
  //         <Sticker data={sticker} />
  //       </a>
  //     )
  //   });

  //   return page;
  // }

  componentDidMount() {
    this.props.dispatch(updatePdfActionCreator(pdfRef));
  }

  render() {
    return (
      <div className={s.main} ref={pdfRef}>
        <tbody>{this.buildStickersPage()}</tbody>
      </div>
    )
  }
}




export default Stickers;