import React from 'react';
import List from './List'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
    return {
        stickers: state.stickersPage.stickers
    }
}


const ListContainer = connect(mapStateToProps, {})(List);


export default ListContainer;