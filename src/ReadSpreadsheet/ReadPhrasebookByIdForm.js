import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import { required, lenghtCreator } from './../utils/validators.js'
import { inputRef, Input } from './../Components/FormsControls/FormsControls.js'
import s from './ReadSpreadsheet.module.css'
import cs from './../Common.module.css'

const lenght44 = lenghtCreator(44);

class ReadPhrasebookByIdFormWithInitialValue extends Component {

    componentDidMount() {
        if (this.props.initialValue) {
            inputRef.current.value = this.props.initialValue;
        }
    }
    
    render() {
        return (
            <ReadPhrasebookByIdForm {...this.props} />
        )
    }
}

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

export default reduxForm({ form: "ReadPhrasebookById" })(ReadPhrasebookByIdFormWithInitialValue);