import React from 'react';

import './styles.scss';
import Category from './Category';
import Filters from './Filters';
import RestaurantSearchResult from './RestaurantSearchResult';
import RestaurantSearchBox from "./RestaurantSearchBox";


const RestaurantListing = () => {
    return (
        <div className="listings">
            <div className="row">
                <div className="col-3">
                    <Category />
                    <Filters/>
                </div>
                <div className="col-9">
                    {/* <RestaurantSearchBox /> */}
                    <RestaurantSearchResult />
                </div>
            </div>
        </div>
    );
}
 
export default RestaurantListing;