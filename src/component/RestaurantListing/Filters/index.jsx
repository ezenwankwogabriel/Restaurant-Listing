import React from 'react';
import Range from './Range/index';

import './styles.scss';
import AppTextHeader from '../../common/AppTextHeader';

const Filters = (props) => {

    return (
        <div className="filters app-bg">
            <AppTextHeader appTextHeaderExtraCSS="h6" text="FILTER"/>
            <Range />
        </div>
    );
}
 
export default Filters;
