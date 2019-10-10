import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({checkboxExtraClass, checkboxName, checkboxLabel, checkedValue, onChange}) => {
    return (
        <div className="form-group form-check">
            <input type="checkbox" data-test="app-checkbox" onChange={onChange} name={checkboxName} className={`form-check-input ${checkboxExtraClass}`} checked={checkedValue}/>
            <label data-test="checkbox-label" className="form-check-label">{checkboxLabel}</label>
        </div>
    )
};

Checkbox.defaultProps = {
    checkboxExtraClass: 'app-checkbox',
    checkboxName: 'app_checkbox',
    checkboxLabel: 'App checkbox',
    checkedValue: false,
    onChange: () => { }
};

Checkbox.propTypes = {
    checkboxExtraClass: PropTypes.string,
    checkboxName: PropTypes.string,
    checkboxLabel: PropTypes.string.isRequired,
    checkedValue: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired
};

export default Checkbox;