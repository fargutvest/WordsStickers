import React from 'react';
import Stickers from './Stickers'
import { updatePdfAC } from './../redux/stickers-reducer'
import { mouseOverStickerAC, mouseLeaveStickerAC,  studiedStickerAC } from './../redux/stickers-reducer';
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
    return {
        stickers: state.stickersPage.stickers
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onPdfUpdate: (newPdf) => dispatch(updatePdfAC(newPdf)),
        onMouseOver: (stickerId) => dispatch(mouseOverStickerAC(stickerId)),
        onMouseLeave: (stickerId) => dispatch(mouseLeaveStickerAC(stickerId)),
        onStudied: (info) => dispatch(studiedStickerAC(info)),
    }
}

const StickersContainer = connect(mapStateToProps, mapDispatchToProps)(Stickers);


export default StickersContainer;