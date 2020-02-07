import React from 'react';
import GDrive from './GDrive'
import { updatePhrasebookFilesActionCreator } from '../redux/gdrive-reducer'

const GDriveContainer = (props) => {

    let state = props.store.getState().filesListPage;
    let updatePhrasebook = (files) => {
        props.store.dispatch(updatePhrasebookFilesActionCreator(files));
    }
    return <GDrive filesList={state.filesList} onUpdatePhrasebook={updatePhrasebook} />;
}

export default GDriveContainer;