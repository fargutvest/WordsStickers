import React from 'react';
import GDrive from './GDrive'
import { getPhrasebookFiles, cleanPhrasebookFiles } from '../redux/gdrive-reducer'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
    return {
        phrasebookFilesTree: state.filesListPage.phrasebookFilesTree
    }
}

const GDriveContainer = connect(mapStateToProps, { getPhrasebookFiles, cleanPhrasebookFiles })(GDrive);


export default GDriveContainer;