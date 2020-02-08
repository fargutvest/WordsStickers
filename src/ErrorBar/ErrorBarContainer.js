import React from 'react';
import ErrorBar from './ErrorBar'
import StoreContext from '../StoreContext';

const ErrorBarContainer = (props) => {
    return <StoreContext.Consumer>
        {
            store => {
                let state = store.getState().errorPage;
                return <ErrorBar error={state.error} />
            }
        }
    </StoreContext.Consumer>
}

export default ErrorBarContainer;