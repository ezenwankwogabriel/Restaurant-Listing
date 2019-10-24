import React from 'react';
import './styles.scss';
import Cards from './cards';

export const RestaurantSearchResult = ({restaurantResult}) => {
  const onClick = () => { };

  return (
    <div className="restaurant-result app-bg" data-testid="app-results">
      { restaurantResult.length && restaurantResult.map(({image, title, content, id}, index) => <Cards key={index} imageUrl={image} cardTitle={title} cardContent={content} onClick={onClick} />)}
    </div>
   );
}
 
export default RestaurantSearchResult;