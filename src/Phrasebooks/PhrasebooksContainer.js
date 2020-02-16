import React, { Component } from 'react';
import Phrasebooks from './Phrasebooks'
import { getPhrasebookFiles, cleanPhrasebookFiles } from '../redux/gdrive-reducer'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
    return {
        phrasebookFilesTree: state.filesListPage.phrasebookFilesTree,
        isSignedIn: state.signInPage.isSignedIn,
    }
}

class PhrasebookContainer extends Component {
    render() {
        if (this.props.isSignedIn && this.props.phrasebookFilesTree.allPhrasebookFiles.length === 0) {
            this.props.getPhrasebookFiles();
        }

        return (
            <Phrasebooks {...this.props} />
        )
    }
}

const PhrasebooksContainer = connect(mapStateToProps, { getPhrasebookFiles, cleanPhrasebookFiles })(PhrasebookContainer);


export default PhrasebooksContainer;