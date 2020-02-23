import React from 'react';
import List from './List'
import { connect } from 'react-redux'
import { getStickersSelector } from '../redux/stickers-selectors';

let mapStateToProps = (state) => {
    return {
        stickers: getStickersSelector(state)
    }
}


const ListContainer = connect(mapStateToProps, {})(List);


export default ListContainer;