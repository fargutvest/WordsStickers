import React, { Component } from 'react';
import Phrasebooks from './Phrasebooks'
import { getPhrasebookFiles, cleanPhrasebookFiles } from '../redux/gdrive-reducer'
import { connect } from 'react-redux'
import {getIsSignedIn} from './../redux/signin-selectors'
import { getPhrasebookFilesTree } from '../redux/phrasebooks';

let mapStateToProps = (state) => {
    return {
        phrasebookFilesTree: getPhrasebookFilesTree(state),
        isSignedIn: getIsSignedIn(state),
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