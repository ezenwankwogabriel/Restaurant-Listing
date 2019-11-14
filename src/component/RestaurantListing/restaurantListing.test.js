

import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../utils";
import {RestaurantListing} from "./";
import Category from "./Category";
import Filters from "./Filters";
import RestaurantSearchBox from "./RestaurantSearchBox";

const setupComponent = props => shallow(<RestaurantListing />);

  describe("Restaurant Listing Component", () => {
    let wrapper = setupComponent();

    it("Should render without an error", () => {
      const inputComponent = findByTestAttr(
        wrapper,
        "app-restaurant-search-result"
      );
      expect(inputComponent.length).toBe(1);
    });

    it('should render single children component', () => {
      const wrapper = setupComponent();
      expect(wrapper.find(Category)).toHaveLength(1);
      expect(wrapper.find(Filters)).toHaveLength(1);
      expect(wrapper.find(RestaurantSearchBox)).toHaveLength(1);
    })
});
