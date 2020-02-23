import React from 'react';
import ErrorBar from './ErrorBar'
import { connect } from 'react-redux'
import { getErrorSelector } from '../redux/error-selectors';

let mapStateToProps = (state) => {
    return {
        error: getErrorSelector(state)
    }
}

const ErrorBarContainer = connect(mapStateToProps, {})(ErrorBar);

export default ErrorBarContainer;