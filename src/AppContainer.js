import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getIsFetchingStickers, getIsGeneratingPdf, getIsShowIframe, getPdfOutput } from './redux/stickers-selectors'
import App from './App';
import { updateIsShowIframe } from './redux/stickers-reducer' 


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
        isGeneratingPdf: getIsGeneratingPdf(state),
        isShowIframe: getIsShowIframe(state),
        pdfOutput: getPdfOutput(state)
    }
}

export default connect(mapStateToProps, {updateIsShowIframe})(AppContainer);
