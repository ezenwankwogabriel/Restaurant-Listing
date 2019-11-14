import React from 'react'
import { shallow } from "enzyme";

import RestaurantPhotos from "./index";
import { findByTestAttr, checkProps } from "../../../utils";

const expectedProps = {
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
    }, {
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

const setup = (props) => {
    const componentProps = {
        ...expectedProps,
        ...props
    };

    const component = shallow(<RestaurantPhotos {...componentProps}/>);
    return component;
};


describe('RestaurantPhotos component', () => {
    describe('Checking propTypes', () => {
        it('Should not throw error', () => {
            const restaurantPhotosError = checkProps(RestaurantPhotos, expectedProps);
            expect(restaurantPhotosError).toBeUndefined();
        });
    });

    describe('RestaurantPhotos render', () => {
        let wrapper = setup();
        
        it('Should render restaurant photos without an error', () => {
            const restaurantPhotosComponent = findByTestAttr(wrapper, 'app-restaurant-photos');
            expect(restaurantPhotosComponent.length).toBe(1);
        });

        it('Should render restaurant individual photo without an error', () => {
            const userImg = findByTestAttr(wrapper, 'photo');
            expect(userImg.length).toBe(2);
        });
    })
});