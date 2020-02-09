import React from 'react';
import List from './List'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
    return {
        stickers: state.stickersPage.stickers
    }
}

let mapDispatchToProps = (dispatch) => {}
  
const ListContainer = connect(mapStateToProps, mapDispatchToProps)(List);


export default ListContainer;