import React from "react";
import PropTypes from 'prop-types';


const Dropdown = ({ dropdownExtraClass, dropdownID, dropdownLabel, dropdownOptions, dataTest, selectedValue, onChange }) => {
    if(!dropdownOptions || dropdownOptions.length === 0) return null;
    return (
        <div className="form-group">
            {dropdownLabel && <label data-test={`${dataTest}-dropdown-label`}>Example select</label> }
            <select className={`form-control ${dropdownExtraClass}`} id={`${dropdownID}-dropdown`} value= {selectedValue} onChange={onChange} data-test={`${dataTest}-dropdown`}>
                { 
                    dropdownOptions.map((option, index) => 
                        <option key={index} value={option.value}>{option.option}</option>
                    )
                }
            </select>
        </div>
    )
};

Dropdown.defaultProps = {
    dropdownExtraClass: '',
    dropdownID: 'app',
    dropdownLabel: 'App dropdown',
    dropdownOptions: [{option: 'one', value: 'One'}, {option: 'two', value: 'Two'}],
    dataTest: 'app',
    selectedValue: '',
    onChange: (e) => { console.log('dropdown changed: ', e.target.value)}
};

Dropdown.propTypes = {
    dropdownExtraClass: PropTypes.string,
    dropdownID: PropTypes.string,
    dropdownLabel: PropTypes.string,
    dropdownOptions: PropTypes.array,
    dataTest: PropTypes.string,
    selectedValue: PropTypes.string,
    onChange: PropTypes.func
};

export default Dropdown;