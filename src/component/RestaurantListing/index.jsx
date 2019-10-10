import React from 'react';
import Restaurant from './Restaurants';
import Category from './Filters'

import './styles.scss'
const RestaurantListing = () => {
  return ( 
    <div className="listings">
      <Category />
      <Restaurant />
    </div>
   );
}
 
export default RestaurantListing;