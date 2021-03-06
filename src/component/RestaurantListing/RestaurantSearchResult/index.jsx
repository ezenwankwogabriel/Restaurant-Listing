import React, { useEffect } from 'react';
import './styles.scss';
import Cards from './cards';
import Pagination from '../../common/Pagination';

export const RestaurantSearchResult = ({listings, page, rowsPerPage, handleChangePage, handleChangeRowsPerPage}) => {
    const onClick = () => { };

    useEffect(() => { // scroll this component to top on update
        window.scrollTo(0, 0)
    }, [listings])

    return (
        <div>
            <div className="restaurant-result app-bg" data-testid="app-results">
                { listings && listings.restaurants &&  listings.restaurants.map(({thumb, name, cuisines, user_rating, phone_numbers, highlights, location, id}) =><Cards key={id} imageUrl={thumb} cardTitle={name} cuisines={cuisines} user_rating={user_rating} phone_numbers={phone_numbers} highlights={highlights} location={location} onClick={onClick} /> )}
            </div>
            <Pagination
                rowsPerPageOptions={1}
                rows={listings && listings.results_found}
                rowsPerPage={rowsPerPage}
                page={page}
                handleChangePage={handleChangePage}
                handleChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </div>
        
	);
}
 
export default RestaurantSearchResult;