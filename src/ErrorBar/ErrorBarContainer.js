import React from 'react';
import ErrorBar from './ErrorBar'
import {connect} from 'react-redux'

let mapStateToProps = (state) => {
    return {
        error: state.errorPage.error
    }
}

let mapDispatchToProps = (dispatch) => {}
  
const ErrorBarContainer = connect(mapStateToProps, mapDispatchToProps)(ErrorBar);
 
export default ErrorBarContainer;