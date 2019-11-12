import React from "react";
import PropTypes from 'prop-types'

import AppTextHeader from "../../common/AppTextHeader";
import AppText from "../../common/AppText";

const RestaurantHeader = () => {
    return (
        <div className="row app-bg ml-0">
            <div className="col-2 pl-0">
                <img className="img-fluid" src="https://via.placeholder.com/150" alt='restaurant'/>
            </div>
            <div className="col-10">
                <div className='p-3'>
                    <AppTextHeader appTextHeaderExtraCSS='h5 mb-0' text='Restaurant name (4.2/5.0)'/>
                    <AppText appTextExtraCSS='mb-0' size='small' text='Breakfast, lunch, dinner'/>
                    <AppText appTextExtraCSS='mt-2 mb-0' size='medium'><i class="fas fa-drumstick-bite h6 pr-2"></i> tea and coffee</AppText>
                    <div className="row">
                        <div className="col-md-auto">
                            <AppText appTextExtraCSS='mb-0' size='medium'><i class="fas fa-phone-volume h6 pr-2"></i> 0809 123 1200</AppText>
                        </div>
                        <div className="col-md-auto">
                            <AppText appTextExtraCSS='mb-0' size='medium'><i class="fas fa-location-arrow h6 pr-2"></i> tea and coffee </AppText>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

RestaurantHeader.defaultProps = {
    name: "",
    featured_image: "",
    highlight: [],
    location: [],
    phone_numbers: "",
    user_rating: [],
    cuisines: ""
};

RestaurantHeader.propTypes = {
    name: PropTypes.string.isRequired,
    featured_image: PropTypes.string.isRequired,
    highlight: PropTypes.array,
    location: PropTypes.array.isRequired,
    phone_numbers: PropTypes.string.isRequired,
    user_rating: PropTypes.array,
    cuisines: PropTypes.string
};


export default RestaurantHeader