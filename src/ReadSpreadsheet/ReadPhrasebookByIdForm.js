import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { required, lenghtCreator } from './../utils/validators.js'
import { Input } from './../Components/FormsControls/FormsControls.js'
import { withInitialValue } from './../hoc/withInitialValue'
import s from './ReadSpreadsheet.module.css'
import cs from './../Common.module.css'

const lenght44 = lenghtCreator(44);

const ReadPhrasebookByIdForm = ({ handleSubmit, onChangeSpreadsheetId }) => {

    return <form onSubmit={handleSubmit}>
        <div className={s.form}>
            <Field name="spreadsheetId" label="Phrasebook ID: " validate={[required, lenght44]} component={Input} onChange={onChangeSpreadsheetId} />
            <div className={s.floatRight}>
                <button className={cs.button} >Read specified phrasebook</button>
            </div>
        </div>
    </form>
}


export default reduxForm({ form: "ReadPhrasebookById" })(withInitialValue(ReadPhrasebookByIdForm));