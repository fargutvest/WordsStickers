import React from 'react';
import GDrive from './GDrive'
import { updatePhrasebookFilesActionCreator } from '../redux/gdrive-reducer'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
    return {
        filesList: state.filesListPage.filesList
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onUpdatePhrasebook: (files) => dispatch(updatePhrasebookFilesActionCreator(files))
    }
}

const GDriveContainer = connect(mapStateToProps, mapDispatchToProps)(GDrive);


export default GDriveContainer;