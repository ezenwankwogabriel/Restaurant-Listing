import React from "react";
import PropTypes from 'prop-types'

import AppTextHeader from "../../common/AppTextHeader";
import AppText from "../../common/AppText";

const RestaurantHeader = ({ name, featured_image, highlights, location, phone_numbers, user_rating, cuisines }) => {
    return (
        <div className="row app-bg ml-0" data-testid="app-restaurant-header">
            <div className="col-2 pl-0">
                <img data-testid="restaurant-img" className="img-fluid" src={featured_image} alt={name}/>
            </div> 
            <div className="col-10">
                <div className='p-3'>
                    <AppTextHeader data-testid="restaurant-name" appTextHeaderExtraCSS='h5 mb-0' text={`${name} (${user_rating.aggregate_rating}/5.0)`}/>
                    <AppText data-testid="restaurant-highlight" appTextExtraCSS='mb-0' size='small' text={highlights.join(',')}/>
                    <AppText data-testid="restaurant-cuisines" appTextExtraCSS='mt-2 mb-0' size='medium'><i className="fas fa-drumstick-bite h6 pr-2"></i> {cuisines}</AppText>
                    <div className="row">
                        <div className="col-md-auto">
                            <AppText data-testid="restaurant-phone-numbers" appTextExtraCSS='mb-0' size='medium'><i className="fas fa-phone-volume h6 pr-2"></i> {phone_numbers} </AppText>
                        </div>
                        <div className="col-md-auto">
                            <AppText data-testid="restaurant-location" appTextExtraCSS='mb-0' size='medium'><i className="fas fa-location-arrow h6 pr-2"></i> {location.address} </AppText>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

RestaurantHeader.defaultProps = {
    name: "Restaurant name",
    featured_image: "https://via.placeholder.com/150",
    highlights: ['Breakfast', 'lunch', 'dinner'],
    location: { address: "Stanley St, Toora", city: "Toora", city_id: 1354, country_id: 14, latitude: "-38.6639414000", locality: "Toora", locality_verbose: "Toora, Toora", longitude: "146.3243777000", zipcode:"03962" },
    phone_numbers: "0809 123 1200",
    user_rating: { aggregate_rating: "3.5", rating_color: "9ACD32", rating_obj: { title: { text: "3.5" }, bg_color: { type: "lime", tint: "500" } }, bg_color: { type: "lime", tint: "500" }, tint: "500", type: "lime", title: { text: "3.5" }, text: "3.5", rating_text: "Good", votes: "9" },
    cuisines: "tea and coffee"
};

RestaurantHeader.propTypes = {
    name: PropTypes.string.isRequired,
    featured_image: PropTypes.string.isRequired,
    highlights: PropTypes.array,
    location: PropTypes.object.isRequired,
    phone_numbers: PropTypes.string.isRequired,
    user_rating: PropTypes.object,
    cuisines: PropTypes.string
};


export default RestaurantHeader