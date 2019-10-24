import React, { useEffect, useState } from "react";

import "./styles.scss";
import Category from "./Category";
import Filters from "./Filters";
import RestaurantSearchResult from "./RestaurantSearchResult";
import RestaurantSearchBox from "./RestaurantSearchBox";
import HigerOC from "../hoc";
import { useCategory } from "../../Store/hooks/useCategory";
import { useRestaurantListings } from "../../Store/hooks/useRestaurantListings";
import { useFilter } from "../../Store/hooks/useFilter";



export const RestaurantListing = ({ categories, sortType, setGlobalStore }) => {
    const { checkedCategories, setCheckedCategories } = useCategory();
    const { sortBy, setSortBy, orderBy, setOrderBy } = useFilter();
    const { restaurantListings, setRestaurantListings } = useRestaurantListings(checkedCategories, sortBy, orderBy);


    const listing = {
        imageUrl: "https://res.cloudinary.com/nesterpod-com/image/upload/v1570649796/1_Drinks_gtdgfr.png",
        cardTitle: "Card Title",
        cardContent: "Some quick example text to build on the card title and make up the bulk of the cards content.",
        id: 1
    };
    const restaurantResult = [
        { ...listing, id: 1 },
        { ...listing, id: 2 },
        { ...listing, id: 3 },
        { ...listing, id: 4 },
        { ...listing, id: 5 },
        { ...listing, id: 6 }
    ];
    const dropDownOptions = [
        { option: "Location", value: "Location", id: 1 },
        { option: "Restaurant", value: "Restaurant", id: 2 }
    ];

    const setRestaurants = () => {
        setRestaurantListings(prev => ([ ...prev, ...restaurantResult ]));
    };

    useEffect(() => {
        // fetch restaurants from api
        setTimeout(setRestaurants(), 10000);
        // eslint-disable-next-line

    }, []);

    async function fetchLocation(event) {
        const value = event.target.value;
        if (sortType !== "Location")
        return setGlobalStore(prev => ({ ...prev, value }));
        if (!value)
        return setGlobalStore(prev => ({
            ...prev,
            message: "Enter Location to search",
            value: ""
        }));
        setGlobalStore(prev => ({ ...prev, value, message: "Loading ..." }));
        const list = {
        entity_type: "city",
        entity_id: 10913,
        title: "Driftwood, Texas",
        latitude: 30.11712915,
        longitude: -98.0131239,
        city_id: 10913,
        city_name: "Driftwood",
        country_id: 216,
        country_name: "United States"
        };
        const data = [{ ...list }, { ...list }, { ...list }];
        await setTimeout(
        () =>
            setGlobalStore(prev => ({
            ...prev,
            locations: data,
            message: "location not found"
            })),
        1000
        );
    }

    function handleDropDownChange(context) {
        const value = context.target.value;
        setGlobalStore(prev => ({ ...prev, sortType: value, value: "" }));
    }

    function findRestaurantByLocationId() {}

    function findRestaurantByName() {}

    function handleSearchValues() {
        switch (sortType) {
        case "Location":
            findRestaurantByLocationId();
            break;
        case "Restaurant":
            findRestaurantByName();
            break;
        default:
            break;
        }
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
                        handleSearchValues={handleSearchValues}
                        action={fetchLocation}
                        handleDropDownChange={handleDropDownChange}
                        dropDownOptions={dropDownOptions}
                    />
                    <RestaurantSearchResult 
                        restaurantResult={restaurantListings}
                    />
                </div>
            </div>
        </div>
    );
};

export default HigerOC(RestaurantListing);
