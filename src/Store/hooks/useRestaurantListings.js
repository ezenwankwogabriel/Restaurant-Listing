import React, { useState } from 'react';

export const useRestaurantListings = (checkedCategories, sortBy, orderBy) => {
    const [restaurantListings, setRestaurantListings] = useState([]);

    return {restaurantListings, setRestaurantListings};
};
