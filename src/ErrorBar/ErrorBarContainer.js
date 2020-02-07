import React from 'react';
import ErrorBar from './ErrorBar'

const ErrorBarContainer = (props) => {

    let state = props.store.getState().errorPage;
    
    return <ErrorBar error = {state.error}/>
}

export default ErrorBarContainer;