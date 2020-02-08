import React from 'react';
import GDrive from './GDrive'
import { updatePhrasebookFilesActionCreator } from '../redux/gdrive-reducer'
import StoreContext from '../StoreContext';

const GDriveContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                store => {
                    let state = store.getState().filesListPage;
                    let updatePhrasebook = (files) => {
                        store.dispatch(updatePhrasebookFilesActionCreator(files));
                    }
                    return <GDrive filesList={state.filesList} onUpdatePhrasebook={updatePhrasebook} />
                }
            }
        </StoreContext.Consumer>)
}

export default GDriveContainer;