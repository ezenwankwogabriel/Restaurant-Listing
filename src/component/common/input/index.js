import React, { Component } from 'react';

const Input = ({inputExtraClass, inputLabel, inputType, onChange, value, dataTest}) => {
    return(
        <div className="form-group">
            <label>{inputLabel}</label>
            <input data-test={`${dataTest}-input`} type={inputType} onChange={onChange} value={value} className={`form-control ${inputExtraClass}`}/>
        </div>
    );
};

export default Input;