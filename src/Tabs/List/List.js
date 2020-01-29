import React from 'react';
import './List.css'

const List = props =>  {
    var counter = 0;
    const rows = props.shared_var.map((row, index) => {
        var rowItems = row.map((item, indexItem) => {
            return <div key={indexItem}> {++counter}) {item.English} </div>
        });
        return <div key={index}> {rowItems} </div>
      })
      
      return <div className="main"> {rows} </div>
    }


export default List;