import React from 'react';
import s from './List.module.css'

const List = props =>  {
    var counter = 0;
    const rows = props.stickers.map((row, index) => {
        var rowItems = row.map((item, indexItem) => {
            return <div key={indexItem}> {++counter}) {item.English} </div>
        });
        return <div key={index}> {rowItems} </div>
      })
      
      return <div className={s.main}> {rows} </div>
    }


export default List;