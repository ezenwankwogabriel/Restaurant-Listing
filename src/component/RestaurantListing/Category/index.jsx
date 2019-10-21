import React, { useState } from 'react';
import PropTypes from 'prop-types';

import CheckBox from '../../common/Checkbox';
import AppTextHeader from '../../common/AppTextHeader';
import AppText from '../../common/AppText';

import './styles.scss'

export const Category = ({ categories }) => {
  const [checkedCategories, setCheckedCategories] = useState(["", 1,2,3]);
  const [testVal, setTestVal] = useState(10);

    function updateCategories(e){
    let incre = 10
    // setInterval(() => {
    //   setTestVal(prev => prev+ incre)
    // }, 1000);

    const checkedValue = Number(e.target.value);
    checkedCategories[checkedValue] = checkedValue.toString();
    setCheckedCategories(prev => prev=checkedCategories);
    console.log('hree', checkedCategories)
  }

    const checkBoxList = categories.length ? categories.map(
        ({ categories: { id, name} }, index) => (
            <div className="mb-1" key={id}>
            {checkedCategories[id]}
                <CheckBox data-testid="app-category-item" checkedValue={id} onChange={updateCategories} isChecked={checkedCategories[id] === id} checkboxLabel={`${name} - ${testVal}`}/>
            </div>
        )
    ) : <AppText data-testid="no-category" text="No Categories found" appTextExtraCSS="text-center" />;

    return (
        <div className="app-bg" data-testid="app-category">
            <div className="row mb-2">
                <div className="col">
                    <div className="p-3">
                        <AppTextHeader appTextHeaderExtraCSS='h6 text-center' text='Category'/>
        <h1>{testVal}</h1>
                        <div>
                            {checkBoxList}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

Category.defaultProps = {
    categories: [],
}

Category.propTypes = {
    categories: PropTypes.array,
    checkedCategories: PropTypes.array,
    updateCategories: () => {}
}

export default Category;