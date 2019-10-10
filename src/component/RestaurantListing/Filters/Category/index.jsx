import React from 'react';
import CheckBox from '../../../common/checkbox';

import './styles.scss'

const Category = (props) => {

  const list = [1, 2] || props.category;
  const checkBoxList = list.map(category => <CheckBox />);

  return ( 
    <div className="category">
      <div>Category</div>
      {checkBoxList}
    </div>
   );
}
 
export default Category;