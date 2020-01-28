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
    componentDidMount(){
      this.props.elmRef(ref);
    }
      
      render(){
      return (
          <div ref = {ref}>
          <tbody>{this.getRows()}</tbody> 
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