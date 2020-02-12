import React from 'react';
import GDrive from './GDrive'
import { updatePhrasebookFiles } from '../redux/gdrive-reducer'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
    return {
        filesList: state.filesListPage.filesList
    }
}

const GDriveContainer = connect(mapStateToProps, {updatePhrasebookFiles})(GDrive);


export default GDriveContainer;