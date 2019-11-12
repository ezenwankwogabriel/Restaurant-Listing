import React from "react";
import AppTextHeader from "../../common/AppTextHeader";
import AppText from "../../common/AppText";

const RestaurantReviews = () => {
    return (
        <div className="row app-bg mt-3 ml-0">
            <div className="col">
                <div className="p-3">
                    <AppTextHeader appTextHeaderExtraCSS='h3'>Reviews</AppTextHeader>
                    <div>
                        <div className='row'>
                            <div className="col-auto">
                                <img className="img-fluid img-thumbnail rounded-circle" src="https://via.placeholder.com/50" alt='user'/>
                            </div>
                            <div className="col">
                                <AppText appTextExtraCSS='mb-0'>John doe (5.0/5.0)</AppText>
                                <AppText>9 days ago</AppText>
                                <div className='row'>
                                    <div className="col">
                                    <AppText>lorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla</AppText>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div>
                        <div className='row'>
                            <div className="col-auto">
                                <img className="img-fluid img-thumbnail rounded-circle" src="https://via.placeholder.com/50" alt='user'/>
                            </div>
                            <div className="col">
                                <AppText appTextExtraCSS='mb-0'>John doe (5.0/5.0)</AppText>
                                <AppText>9 days ago</AppText>
                                <div className='row'>
                                    <div className="col">
                                    <AppText>lorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla</AppText>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RestaurantReviews;