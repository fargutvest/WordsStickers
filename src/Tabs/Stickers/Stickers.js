import React, { Component } from 'react';
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";
import './Stickers.css';

const ref = React.createRef();
const options = {
  orientation: 'landscape'
};
const rows = [];

class Stickers extends Component {
  constructor(props){
    super(props);
  }
   getRows(){
    return this.props.shared_var.map((row, index) => {
        return (
      <tr key={index}>
        <td><Sticker data={row[0]}/></td><td><Sticker data={row[1]}/></td><td><Sticker data={row[2]}/></td><td><Sticker data={row[3]}/></td>
      </tr>
        )
      });
    }
      
      render(){
      return (
        <div>
          <Pdf targetRef={ref} filename="stickers.pdf" options ={options} x ={2} y ={2}>
              {({ toPdf }) => <button className="button" onClick={toPdf}>Generate Pdf</button>}
          </Pdf>
          <div ref = {ref}>
          <tbody>{this.getRows()}</tbody> 
          </div>
        </div>
      )
    }
  }
    
    
    class Sticker extends Component {
      render() {
        return (
          <div className="Sticker">
                <div className="English Part">{this.props.data.English}</div>
                <div className="Spelling Part">{this.props.data.Spelling}</div>
                <div className="Russian Part">{this.props.data.Russian}</div>
          </div>
        );
      }
    }

export default Stickers;