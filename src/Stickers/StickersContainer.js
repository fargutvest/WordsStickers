import React from 'react';
import Stickers from './Stickers'
import { updatePdfActionCreator } from './../redux/stickers-reducer'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
    return {
        stickers: state.stickersPage.stickers
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onPdfUpdate: (newPdf) => dispatch(updatePdfActionCreator(newPdf))
    }
}

const StickersContainer = connect(mapStateToProps, mapDispatchToProps)(Stickers);


export default StickersContainer;