import React from "react";
import { shallow } from "enzyme";
import {RestaurantSearchResult} from "./";
import Cards from './cards'
import { findByTestAttr, checkProps } from "../../../utils";

const restuarantSample = {
  id: 1,
  name: 'Restaurant name',
  cuisines: 'Coffe and Tea',
  user_rating: {
    aggregate_rating: "4.2",
    rating_text: "Very Good",
    votes: "39"
  },
  phone_numbers: "08011223344",
  highlights: ["Breakfast", "Dinner", "Lunch", "Outdoor Seating", "Kid Friendly"], 
  location: {
    address: "164 Tourist Rd, Rangeville",
    city: "Rangeville",
    city_id: 2759,
    country_id: 14,
    latitude: "-27.5785450000",
    locality: "Rangeville",
    locality_verbose: "Rangeville, Rangeville",
    longitude: "151.9874570000",
    zipcode: "4350"
  },
  featured_image: "https://res.cloudinary.com/nesterpod-com/image/upload/v1570649796/1_Drinks_gtdgfr.png"
};
const expectedProps = {
  restaurantResult: [restuarantSample],
};

const setup = (props = {}) => {
  const componentProps = {
    ...expectedProps,
    ...props
  };

  let component = shallow(<RestaurantSearchResult {...componentProps} />);
  return component;
};

// beforeEach(() => {
// })

describe("Restaurant Result Component", () => {
  describe("Checking propTypes", () => {
    it("Should not throw error", () => {      
      const restaurantError = checkProps(RestaurantSearchResult, expectedProps);
      expect(restaurantError).toBeUndefined();
    });
  });

  describe("Restaurant List render", () => {
    let wrapper = setup();
    it("Should render restaurant without an error", () => {
      const restaurantComponent = findByTestAttr(wrapper, "app-results");
      expect(restaurantComponent.length).toBe(1);
    });
  });

  describe("Restaurant List render", () => {
    it("Should render restaurant with 2 Cards as passed on props", () => {
  
    let wrapper = setup({
        restaurantResult: [restuarantSample,restuarantSample]
      });
      expect(wrapper.find(Cards)).toHaveLength(2);
    });
  });
});
