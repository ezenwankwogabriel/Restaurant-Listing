import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../utils";
import RestaurantDetails from "./";
import RestaurantHeader from "./RestaurantHeader"
import RestaurantReviews from "./RestaurantReviews";
import RestaurantPhotos from "./RestaurantPhotos";

const setupComponent = props => shallow(<RestaurantDetails />);

describe("Restaurant Details Component", () => {
    let wrapper = setupComponent();

    it("Should render without an error", () => {
        const restaurantDetailsComponent = findByTestAttr(wrapper, "app-restaurant-details");
        expect(restaurantDetailsComponent.length).toBe(1);
    });

    it('should render each child component', () => {
        const wrapper = setupComponent();
        expect(wrapper.find(RestaurantHeader)).toHaveLength(1);
        expect(wrapper.find(RestaurantReviews)).toHaveLength(1);
        expect(wrapper.find(RestaurantPhotos)).toHaveLength(1);
    })
});
