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


export const RestaurantListing = ({ categories }) => {
    const [searchItem, setSearchItem] = useState('');
    const { checkedCategories, setCheckedCategories } = useCategory();
    const { sortBy, setSortBy, orderBy, setOrderBy } = useFilter();
    const { restaurantListings } = useRestaurantListings(checkedCategories, sortBy, orderBy);
    const { searchResults, notification } = useFetchLocation(searchItem);

    function searchRestaurantBySortType(sortType) {
        switch(sortType) {
            case 'Location': console.log('hello', searchItem); break;
            case 'Restaurant': console.log('hello', searchItem); break;
            default: break;
        }
    }

    async function fetchSortBy(value) {
        setSearchItem(value);
    }

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
                        restaurantResult={restaurantListings}
                    />
                    <Pagination
                        rows={[]}
                        rowsPerPage={12}
                        page={0}
                        handleChangePage={() => {}}
                        handleChangeRowsPerPage={() => {}}
                    />
                </div>
            </div>
        </div>
    );
};

export default HigerOC(RestaurantListing);