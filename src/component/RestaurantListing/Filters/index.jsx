import React from 'react';
import Slider from './Slider/index';
import Category from './Category/index';

import './styles.scss';

const Filters = (props) => {

  return (
    <div className="filters">
      <Category /> 
      <br/>
      <Slider />
    </div>
   );
}
 
export default Filters;
