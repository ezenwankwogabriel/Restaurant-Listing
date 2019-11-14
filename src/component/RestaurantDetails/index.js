import React from "react";
import RestaurantHeader from "./RestaurantHeader"
import RestaurantReviews from "./RestaurantReviews";
import RestaurantPhotos from "./RestaurantPhotos";

const RestaurantDetails = () => {
    return (
        <div className="details" data-testid="app-restaurant-details">
            <RestaurantHeader />
            <RestaurantReviews />
            <RestaurantPhotos />
        </div>
    )
}

export default RestaurantDetails;