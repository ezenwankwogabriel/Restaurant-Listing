import React from "react";
import AppTextHeader from "../../common/AppTextHeader";
import AppText from "../../common/AppText";

const RestaurantPhotos = () => {
    return (
        <div className="row app-bg mt-3 ml-0">
            <div className="col">
                <div className="p-3">
                    <AppTextHeader appTextHeaderExtraCSS='h3'>Photos</AppTextHeader>
                    <div>
                        <img className="img-fluid p-2" src="https://via.placeholder.com/150" alt='restaurant'/>
                        <img className="img-fluid p-2" src="https://via.placeholder.com/150" alt='restaurant'/>
                        <img className="img-fluid p-2" src="https://via.placeholder.com/150" alt='restaurant'/>
                        <img className="img-fluid p-2" src="https://via.placeholder.com/150x120" alt='restaurant'/>
                        <img className="img-fluid p-2" src="https://via.placeholder.com/150x120" alt='restaurant'/>
                        <img className="img-fluid p-2" src="https://via.placeholder.com/150x200" alt='restaurant'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RestaurantPhotos;