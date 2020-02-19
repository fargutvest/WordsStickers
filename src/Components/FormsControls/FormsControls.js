import React from 'react';
import s from './FormControls.module.css'

export const inputRef = React.createRef();

export const Input = ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={`${s.formControl} ${hasError ? s.error : ""}`}>
            {props.label ? <label className="w3-text-white"><b>{props.label}</b></label> : ""}
            <input className="w3-input w3-border" ref={inputRef} {...input} value={undefined} {...props} />
        </div>
    )
}