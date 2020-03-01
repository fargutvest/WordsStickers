import React from 'react';
import s from './FormControls.module.css'

export const inputRef = React.createRef();

export const Input = ({ input, meta, label, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
        <div>
            {label ? <label className="w3-text-white"><b>{label}</b></label> : ""}
            {hasError ? <span className={`${s.formControl} ${s.error}`}>{meta.error}</span> : ""}
            <input className={`w3-input w3-border ${s.formControl} ${hasError ? s.error : ""}`} ref={inputRef} {...input} value={undefined} {...props} />
        </div>
    )
}