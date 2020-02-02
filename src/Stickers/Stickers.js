import React, { Component } from 'react';
import s from './Stickers.module.css';
import Sticker from './Sticker/Sticker';

const ref = React.createRef();

class Stickers extends Component {
  constructor(props) {
    super(props);
  }
  getRows() {
    return this.props.shared_var.map((row, index) => {
      return (
        <tr key={index}>
          <td><Sticker data={row[0]} /></td><td><Sticker data={row[1]} /></td><td><Sticker data={row[2]} /></td><td><Sticker data={row[3]} /></td>
        </tr>
      )
    });
  }
  componentDidMount() {
    this.props.passRef(ref);
  }

  render() {
    return (
      <div className={s.main} ref={ref}>
        <tbody>{this.getRows()}</tbody>
      </div>
    )
  }
}




export default Stickers;