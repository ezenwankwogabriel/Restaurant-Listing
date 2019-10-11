import React from 'react';
import CheckBox from '../../common/Checkbox';
import AppTextHeader from '../../common/AppTextHeader';

import './styles.scss'

const Category = (props) => {

    const list = [1, 2] || props.category;
    const checkBoxList = list.map((category, index) => <CheckBox key={index}/>);

    return (
        <div className="category app-bg">
            <AppTextHeader appTextHeaderExtraCSS='h6' text='Category'/>
            {checkBoxList}
        </div>
    );
}
 
export default Category;