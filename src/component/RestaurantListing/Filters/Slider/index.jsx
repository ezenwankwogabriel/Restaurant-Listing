import React from 'react';
import CheckBox from '../../../common/Checkbox';

import './styles.scss';

const Slider = (props) => {

  const list = [1, 2] || props.categories;
  const sliderList = list.map(category => <CheckBox category={category} />);

  return ( 
    <div className="slider">
      <div>Filter By Price</div>
      {sliderList}
    </div>
   );
}
 
export default Slider;