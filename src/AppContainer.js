import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getIsFetchingStickers, getIsGeneratingPdf } from './redux/stickers-selectors'
import App from './App';


class AppContainer extends Component {

    render() {
        return (
            <App {...this.props} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        isFetchingStickers: getIsFetchingStickers(state),
        isGeneratingPdf: getIsGeneratingPdf(state)
    }
}

export default connect(mapStateToProps)(AppContainer);
