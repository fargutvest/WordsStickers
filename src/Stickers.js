import React, { Component } from 'react';

const Stickers = props => {
    const rows = props.characterData.map((row, index) => {
        return (
      <tr key={index}>
        <td><Sticker data={row[0]}/></td><td><Sticker data={row[1]}/></td><td><Sticker data={row[2]}/></td><td><Sticker data={row[3]}/></td>
      </tr>
        )
      })
      return (
        <div>
      <tbody>{rows}</tbody>
      </div>
      ); 
    }
    
    class Sticker extends Component {
      render() {
        return (
          <div className="Sticker">
              <p>{this.props.data.English}</p>
                <p>{this.props.data.Spelling}</p>
                <p>{this.props.data.Russian}</p>
          </div>
        );
      }
    }


export default Stickers;