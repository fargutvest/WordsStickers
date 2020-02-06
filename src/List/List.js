import React from 'react';
import s from './List.module.css'

const List = props =>  {
    const list = props.stickers.map((sticker, index) => {
        return <div key={index}> {index}) {sticker.English} </div>
      })
      return <div className={s.main}> {list} </div>
    }


export default List;