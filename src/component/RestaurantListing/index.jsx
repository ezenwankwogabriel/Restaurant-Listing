import React, { useState } from "react";

import "./styles.scss";
import Category from "./Category";
import Filters from "./Filters";
import RestaurantSearchResult from "./RestaurantSearchResult";
import RestaurantSearchBox from "./RestaurantSearchBox";
import HigerOC from "../hoc";
import { useCategory } from "../../Store/hooks/useCategory";
import { useRestaurantListings } from "../../Store/hooks/useRestaurantListings";
import { useFilter } from "../../Store/hooks/useFilter";
import useFetchLocation from '../../Store/hooks/fetchLocation';
import Pagination from '../common/Pagination';
import { is } from "@babel/types";


export const RestaurantListing = ({ categories }) => {
    const [searchItem, setSearchItem] = useState('');
    const { checkedCategories, setCheckedCategories } = useCategory();
    const { sortBy, setSortBy, orderBy, setOrderBy, searchBy, setSearchBy } = useFilter();
    const { searchResults, notification } = useFetchLocation(searchItem);
    // const {results_found, results_shown, results_start} = restaurantListings;
    const {
        restaurantListings,
        page,
        setPage,
        rowsPerPage,
        setRowsPerPage,
        isGettingRestaurantListings
    } = useRestaurantListings(checkedCategories, sortBy, orderBy, searchBy);

    function searchRestaurantBySortType(sortType) {
        setPage(0);
        switch(sortType) {
            case 'Location': setSearchBy(searchItem); break;
            case 'Restaurant': setSearchBy(searchItem); break;
            default: break;
        }
    }

    async function fetchSortBy(value) {
        setSearchItem(value);
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(parseInt(event.target.value, 12));
        setPage(0);
    };

    const responseHandle = (message) => (<div className="centralize"> {message} </div>)

    const showPagination = () => (
        restaurantListings.results_found && !isGettingRestaurantListings ? <Pagination
            rowsPerPageOptions={1}
            rows={restaurantListings && restaurantListings.results_found}
            rowsPerPage={rowsPerPage}
            page={page}
            handleChangePage={handleChangePage}
            handleChangeRowsPerPage={handleChangeRowsPerPage}
        /> : !isGettingRestaurantListings? 
        responseHandle('No restaurants Found') : 
        responseHandle('Fetching Restaurants ...')
    )

    return (
        <div className="listings" data-testid="app-restaurant-search-result">
            <div className="row">
                <div className="col-3">
                    <Category
                        checkedCategories={checkedCategories}
                        categories={categories}
                        setCheckedCategories={setCheckedCategories}
                    />
                    <Filters 
                        sortBy={sortBy}
                        orderBy={orderBy}
                        setSortBy={setSortBy}
                        setOrderBy={setOrderBy}
                    />
                </div>
                <div className="col-9">
                    <RestaurantSearchBox
                        search={searchItem}
                        resetSearch={() => setSearchItem('')}
                        searchResults={searchResults}
                        notification={notification}
                        action={fetchSortBy}
                        searchRestaurant={searchRestaurantBySortType}
                    />
                    <RestaurantSearchResult 
                        restaurantResult={restaurantListings.restaurants}
                    />
                    {showPagination()}
                </div>
            </div>
        </div>
    );
};

export default HigerOC(RestaurantListing);
