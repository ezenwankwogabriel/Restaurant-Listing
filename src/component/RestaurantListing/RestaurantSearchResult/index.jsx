import React from 'react';
import './styles.scss';
import Cards from './cards';
import HigherOC from '../../hoc';

export const RestaurantSearchResult = ({restaurantResult: results}) => {
  const onClick = () => { };
  return (
    <div className="restaurant-result app-bg" data-testid="app-results">
      { results && results.map(({image, title, content, id}, index) => <Cards key={index} imageUrl={image} cardTitle={title} cardContent={content} onClick={onClick} />)}
    </div>
   );
}
 
export default HigherOC(RestaurantSearchResult);