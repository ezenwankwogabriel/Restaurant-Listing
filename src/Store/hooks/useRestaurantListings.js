import React, { useState, useEffect } from 'react';
import { api } from "../../api"
import { querybuilder, filterRestaurantResult } from "../../utils";

export const useRestaurantListings = (checkedCategories, sortBy, orderBy) => {
    const [restaurantListings, setRestaurantListings] = useState({});
    const [isGettingRestaurantListings, setIsGettingRestaurantListings] = useState(false);
    const [restaurantListingsError, setRestaurantListingsError] = useState('');

    useEffect(() => {
        const query = querybuilder(checkedCategories, sortBy, orderBy);

        const getRestaurantListing = async () => {
            setIsGettingRestaurantListings(true);
            try {
                const { data } = await api.get('search'+query);
                setRestaurantListings(prev => ([ ...filterRestaurantResult(data) ]));

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
    }, [checkedCategories, sortBy, orderBy])
    return {restaurantListings, isGettingRestaurantListings, restaurantListingsError};
};
