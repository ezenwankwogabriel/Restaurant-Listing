import React, { useState, useEffect } from 'react';
import { api } from "../../api"
import { querybuilder, filterRestaurantResult } from "../../utils";

export const useRestaurantListings = (checkedCategories, sortBy, orderBy, searchBy) => {
    const [restaurantListings, setRestaurantListings] = useState({});
    const [isGettingRestaurantListings, setIsGettingRestaurantListings] = useState(false);
    const [restaurantListingsError, setRestaurantListingsError] = useState('');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(12);

    useEffect(() => {
        const query = querybuilder(checkedCategories, page, rowsPerPage, sortBy, orderBy, searchBy);

        const getRestaurantListing = async () => {
            setIsGettingRestaurantListings(true);
            try {
                const { data } = await api.get('search'+query);
                const result = filterRestaurantResult(data);
                setRestaurantListings(result);

                // setRestaurantListings(filterRestaurantResult(data));
                setIsGettingRestaurantListings(false);
            } catch (error) {
                setIsGettingRestaurantListings(false);
                setRestaurantListingsError(error);
            }
        }
        getRestaurantListing();
        // return () => {
        //     cleanup
        // };
    }, [checkedCategories, sortBy, orderBy, searchBy, page, rowsPerPage])
    return {restaurantListings, isGettingRestaurantListings, restaurantListingsError, rowsPerPage, setRowsPerPage, page, setPage};
};
