import React from 'react';
import Stickers from './Stickers'
import {updatePdfActionCreator} from './../redux/stickers-reducer'

const StickersContainer = (props) => {
    let state = props.store.getState().stickersPage;

    let updatePdf = (newPdf) => {
        props.store.dispatch(updatePdfActionCreator(newPdf));
    }

    return (<Stickers stickers={state.stickers} onPdfUpdate={updatePdf} />);
}

export default StickersContainer;