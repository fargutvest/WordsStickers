import React from 'react';
import Stickers from './Stickers'
import { updatePdfActionCreator } from './../redux/stickers-reducer'
import StoreContext from '../StoreContext';

const StickersContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                store => {
                    let state = store.getState().stickersPage;

                    let updatePdf = (newPdf) => {
                        store.dispatch(updatePdfActionCreator(newPdf));
                    }
                    return (<Stickers stickers={state.stickers} onPdfUpdate={updatePdf} />)
                }
            }
        </StoreContext.Consumer>
    );
}

export default StickersContainer;