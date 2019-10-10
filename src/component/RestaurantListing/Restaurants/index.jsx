import React from 'react';
import DropDown from '../../common/dropdown';
import InputBox from '../../common/input';
import Button from '../../common/button';
import Label from '../../common/Label';
import './styles.scss';

const Restaurants = () => {

  const options = [{option: 'one', value: 'One'}, {option: 'two', value: 'Two'}];
  return ( 
    <div className="restaurant">
      {/* header component, to would be refactored */}
      <div className="header"> 
        <Label labelExtraClass="" labelText="Filter By" />
        <DropDown dropdownExtraClass="" dropdownOptions={options} />
        <InputBox />
        <Button buttonText="secondary" buttonExtraCSS="" />
      </div>
      {/* content component, to be refactored also */}
      <div className="content">
        
      </div>
    </div>
   );
}
 
export default Restaurants;