import React from 'react';
import PropTypes from 'prop-types';

import CheckBox from '../../common/Checkbox';
import AppTextHeader from '../../common/AppTextHeader';

import './styles.scss'
import AppText from '../../common/AppText';

const Category = ({ categoryList }) => {

    const checkBoxList = categoryList.length ? categoryList.map(
        (category, index) => <CheckBox checkedValue={category.id} checkboxLabel={category.name} key={index}/>
        ) : <AppText text="No Categories found" appTextExtraCSS="text-center" />;

    return (
        <div className="app-bg">
            <div className="row mb-2">
                <div className="col">
                    <div className="p-3">
                        <AppTextHeader appTextHeaderExtraCSS='h6 text-center' text='Category'/>
                        <div>
                            {checkBoxList}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Category.defaultProps = {
//     categoryList: []
// }

Category.defaultProps = {
    categoryList: [{ id: 1, name: 'Delivery' }, { id: 2, name: 'Dine-out' }]
}

Category.propTypes = {
    categoryList: PropTypes.array
}

export default Category;