import React from 'react'
import { shallow } from "enzyme";

import RestaurantHeader from "./index";
import { findByTestAttr, checkProps } from "../../../utils";

const expectedProps = {
    name: "Restaurant name",
    featured_image: "https://via.placeholder.com/150",
    highlights: ['Breakfast', 'lunch', 'dinner'],
    location: { address: "Stanley St, Toora", city: "Toora", city_id: 1354, country_id: 14, latitude: "-38.6639414000", locality: "Toora", locality_verbose: "Toora, Toora", longitude: "146.3243777000", zipcode:"03962" },
    phone_numbers: "0809 123 1200",
    user_rating: { aggregate_rating: "3.5", rating_color: "9ACD32", rating_obj: { title: { text: "3.5" }, bg_color: { type: "lime", tint: "500" } }, bg_color: { type: "lime", tint: "500" }, tint: "500", type: "lime", title: { text: "3.5" }, text: "3.5", rating_text: "Good", votes: "9" },
    cuisines: "tea and coffee"
};

const setup = (props) => {
    const componentProps = {
        ...expectedProps,
        ...props
    };

    const component = shallow(<RestaurantHeader {...componentProps}/>);
    return component;
};


describe('RestaurantHeader component', () => {
    describe('Checking propTypes', () => {
        it('Should not throw error', () => {
            const restaurantHeaderError = checkProps(RestaurantHeader, expectedProps);
            expect(restaurantHeaderError).toBeUndefined();
        });
    });

    describe('RestaurantHeader render', () => {
        let wrapper = setup();
        
        it('Should render restaurant header without an error', () => {
            const restaurantHeaderComponent = findByTestAttr(wrapper, 'app-restaurant-header');
            expect(restaurantHeaderComponent.length).toBe(1);
        });

        it('Should render restaurant image without an error', () => {
            const restaurantImg = findByTestAttr(wrapper, 'restaurant-img');
            expect(restaurantImg.length).toBe(1);
        });

        it('Should render restaurant name without an error', () => {
            const restaurantName = findByTestAttr(wrapper, 'restaurant-name');
            expect(restaurantName.length).toBe(1);
        });

        it('Should render restaurant highlight without an error', () => {
            const restaurantHighlight = findByTestAttr(wrapper, 'restaurant-highlight');
            expect(restaurantHighlight.length).toBe(1);
        });

        it('Should render restaurant cuisines without an error', () => {
            const restaurantCuisines = findByTestAttr(wrapper, 'restaurant-cuisines');
            expect(restaurantCuisines.length).toBe(1);
        });

        it('Should render restaurant phone numbers without an error', () => {
            const restaurantPhoneNumbers = findByTestAttr(wrapper, 'restaurant-phone-numbers');
            expect(restaurantPhoneNumbers.length).toBe(1);
        });

        it('Should render restaurant location without an error', () => {
            const restaurantLocation = findByTestAttr(wrapper, 'restaurant-location');
            expect(restaurantLocation.length).toBe(1);
        });
    });
});
