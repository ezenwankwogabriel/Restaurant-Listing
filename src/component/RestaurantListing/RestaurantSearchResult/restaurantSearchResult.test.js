import React from "react";
import { shallow } from 'enzyme';
import RestaurantSearchResult from "./";
import { findByTestAttr, checkProps } from "../../../utils";

const expectedProps = {
  results: [{
    image: 'https://res.cloudinary.com/nesterpod-com/image/upload/v1570649796/1_Drinks_gtdgfr.png',
    link: 'View More',
    title: 'Card Title', 
    content: 'Some quick example text to build on the card title and make up the bulk of the cards content.', 
    id: 1,
  }]
};

const setup = (props={}) => {
    const componentProps= {
        ...expectedProps,
        ...props
    };

    let component = shallow(<RestaurantSearchResult {...componentProps} />);
    return component;
};


describe('Restaurant Result Component', () => {
    describe('Checking propTypes', () => {
        it('Should not throw error', () => {
            const restaurantError = checkProps(RestaurantSearchResult, expectedProps);
            expect(restaurantError).toBeUndefined();
        });
    });

    describe('Restaurant List render', () => {
        let wrapper = setup();
        it('Should render restaurant without an error', () => {
            const restaurantComponent = findByTestAttr(wrapper, 'app-results');
            expect(restaurantComponent.length).toBe(1);
        });
    });
})