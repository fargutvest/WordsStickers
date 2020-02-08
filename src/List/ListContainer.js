import React from 'react';
import List from './List'
import StoreContext from '../StoreContext';

const ListContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                store => {
                    let state = store.getState().stickersPage;
                    return <List stickers={state.stickers} />
                }
            }
        </StoreContext.Consumer>
    )
}

export default ListContainer;