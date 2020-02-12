import React from 'react';
import ErrorBar from './ErrorBar'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
    return {
        error: state.errorPage.error
    }
}

const ErrorBarContainer = connect(mapStateToProps, {})(ErrorBar);

export default ErrorBarContainer;