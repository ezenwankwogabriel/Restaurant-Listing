import React from 'react';
import PropTypes from 'prop-types';
import DropDown from '../../common/Dropdown';
import InputBox from '../../common/Input';
import Button from '../../common/Button';
import Label from '../../common/Label';
import SearchBox from './searchBox';
import './styles.scss';
import HigherOC from '../../hoc';

export const RestaurantSearchBox = ({action, handleDropDownChange, dropDownOptions, handleSearchValues, sortType, value, message, locations: results}) => {

    const searchValues = () => (value && handleSearchValues())

    return (
        <div className="restaurant app-bg" data-testid="app-restaurant-search-box">
            <div className="header">
                <Label labelExtraClass="" labelText="Sort By" />
                <DropDown dropdownExtraClass="" dropdownOptions={dropDownOptions} onChange={handleDropDownChange} />
                {sortType === 'Location' ? 
                <SearchBox value={value} message={message} onChange={action} result={results} /> 
                    : 
                <InputBox value={value} onChange={action}  />}
                <Button onClick={searchValues} buttonText="secondary" buttonExtraCSS="" />
            </div>
        </div>
    );
}

RestaurantSearchBox.propTypes = {
  action: PropTypes.func,
  handleDropDownChange: PropTypes.func,
  dropDownOptions: PropTypes.array,
}

export default HigherOC(RestaurantSearchBox);
