import React from 'react';
import List from './List'

const ListContainer = (props) => {

    let state = props.store.getState().stickersPage;
    
    return (<List stickers={state.stickers} />)
}

export default ListContainer;