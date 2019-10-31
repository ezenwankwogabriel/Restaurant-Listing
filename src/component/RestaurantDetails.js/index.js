import React from "react";
import AppTextHeader from "../common/AppTextHeader";
import AppText from "../common/AppText";

const RestaurantDetails = () => {
    return (
        <div className="details" data-testid="app-restaurant-details">
            <div className="row app-bg ml-0">
                <div className="col-2 pl-0">
                    <img className="img-fluid" src="https://via.placeholder.com/150" alt='restaurant'/>
                </div>
                <div className="col-10">
                    <div className='p-3'>
                        <AppTextHeader appTextHeaderExtraCSS='h5 mb-0' text='Restaurant name (4.2/5.0)'/>
                        <AppText appTextExtraCSS='mb-0' size='small' text='Breakfast, lunch, dinner'/>
                        <AppText appTextExtraCSS='mt-2 mb-0' size='medium'><i class="fas fa-drumstick-bite h6 pr-2"></i> tea and coffee</AppText>
                        <AppText appTextExtraCSS='mb-0' size='medium'><i class="fas fa-location-arrow h6 pr-2"></i> tea and coffee </AppText>
                        <AppText appTextExtraCSS='mb-0' size='medium'><i class="fas fa-phone-volume h6 pr-2"></i> 0809 123 1200</AppText>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    welcome
                </div>
            </div>
        </div>
    )
}

export default RestaurantDetails;