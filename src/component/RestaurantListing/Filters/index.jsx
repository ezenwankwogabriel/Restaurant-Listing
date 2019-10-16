import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';
import AppTextHeader from '../../common/AppTextHeader';
import Label from '../../common/Label';
import RadioButton from '../../common/RadioButton';

const Filters = ({ sortBy, orderBy, setSortBy, setOrderBy }) => {

    function onChange(e) {
        if(e.target.name === "sort_by"){
            return setSortBy(e.target.value);
        }
        return setOrderBy(e.target.value);
    }

    return (
        <div className="app-bg" data-testid="app-filter">
            <div className="row mb-2">
                <div className="col">
                    <div className="p-3">
                        <div className="row">
                            <div className="col">
                                <AppTextHeader appTextHeaderExtraCSS='h6 text-center' text='Filter'/>
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col">
                                <Label labelText="Sort by" labelExtraClass="mb-2"/>
                                <div className="py-1">
                                    <RadioButton data-testid="sort-by-pricing" radioButtonName="sort_by" radioButtonValue="pricing" onChange={onChange} isChecked={sortBy==="pricing"} radioButtonLabel="Restaurant pricing"/>
                                </div>
                                <div className="py-1">
                                    <RadioButton data-testid="sort-by-rating" radioButtonName="sort_by" radioButtonValue="rating" onChange={onChange} isChecked={sortBy==="rating"} radioButtonLabel="Restaurant ratings"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <Label labelText="Order by" labelExtraClass="mb-2"/>
                                <div className="py-1">
                                    <RadioButton data-testid="order-by-asc" radioButtonName="order_by" radioButtonValue="asc" onChange={onChange} isChecked={orderBy==="asc"} radioButtonLabel="Lowest to Highest"/>
                                </div>
                                <div className="py-1">
                                    <RadioButton data-testid="order-by-desc" radioButtonName="order_by" radioButtonValue="desc" onChange={onChange} isChecked={orderBy==="desc"} radioButtonLabel="Highest to Lowest"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

Filters.defaultProps = {
    sortBy: '',
    orderBy: '',
    setSortBy: () => { },
    setOrderBy: () => { }
};

Filters.propTypes = {
    sortBy: PropTypes.string.isRequired,
    orderBy: PropTypes.string.isRequired,
    setSortBy: PropTypes.func.isRequired,
    setOrderBy: PropTypes.func.isRequired
};

export default Filters;
