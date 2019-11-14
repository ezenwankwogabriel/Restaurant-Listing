import React from "react";
import PropTypes from 'prop-types';

import AppTextHeader from "../../common/AppTextHeader";

const RestaurantPhotos = ({ photos }) => {
    return (
        <div className="row app-bg mt-3 ml-0" data-testid="app-restaurant-photos">
            <div className="col">
                <div className="p-3">
                    <AppTextHeader appTextHeaderExtraCSS='h3'>Photos</AppTextHeader>
                    <div>
                        { photos.length > 0 && photos.map(photo => {
                            return(<img key={photo.photo.id} data-testid="photo" className="img-fluid p-2" src={photo.photo.thumb_url} alt={photo.photo.id}/>)
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

RestaurantPhotos.defaultProps = {
    photos: [{
        photo: {
            caption: "",
            friendly_time: "8 days ago",
            height: 4032,
            id: "u_Y2MjUyNDEzMjMw",
            res_id: 16607199,
            thumb_url: "https://b.zmtcdn.com/data/reviews_photos/5c3/e62f4e8090ca34bd8022b71a708775c3_1572848963.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
            timestamp: 1572848964,
            url: "https://b.zmtcdn.com/data/reviews_photos/5c3/e62f4e8090ca34bd8022b71a708775c3_1572848963.jpg",
        }
    }]
};

RestaurantPhotos.propTypes = {
    photos: PropTypes.array
};

export default RestaurantPhotos;