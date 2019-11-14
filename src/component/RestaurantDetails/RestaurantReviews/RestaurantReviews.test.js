import React from 'react'
import { shallow } from "enzyme";

import RestaurantReviews from "./index";
import { findByTestAttr, checkProps } from "../../../utils";

const expectedProps = {
    reviews: [{
        review: {
            comments_count: 0,
            id: 45997008,
            likes: 0,
            rating: 4,
            rating_color: "5BA829",
            rating_text: "Great!",
            review_text: "Authentic old school pub. Drinks are nice and staff is super friendly. Food is nice, although the lamb was slightly overcooked and the chicken had too much sauce on it, but overall everything was nice. Huge portions, easy to share with others.",
            review_time_friendly: "8 days ago",
            timestamp: 1572848916,
            user: {
                foodie_color: "f58552",
                foodie_level: "Super Foodie",
                foodie_level_num: 10,
                name: "Mia Tua",
                profile_deeplink: "zomato://u/24064742",
                profile_image: "https://b.zmtcdn.com/data/user_profile_pictures/96f/d840a9ccbcc438042a6d56fbba47996f.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A",
                profile_url: "https://www.zomato.com/miatua?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                zomato_handle: "miatua"
            }
        }
    },{
        review: {
            comments_count: 0,
            id: 39987267,
            likes: 1,
            rating: 5,
            rating_color: "305D02",
            rating_text: "Insane!",
            review_text: "The previous ratings are extremely outdated and in my opinion unfairly include ratings from a time before the current operators took over. My husband and I went to the Royal Standard on Saturday (Melbourne Cup Weekend) for a meal and the place was absolutely buzzing and fully booked. We were thrilled that despite how busy it was (and as on all previous visits) we were incredibly impressed and satisfied with both the food and service. The current operators are doing an amazing job. To summarize, I can't recommend this warm and friendly country Pub highly enough.",
            review_time_friendly: "Nov 07, 2018",
            timestamp: 1541575127,
            user: {
                foodie_color: "ffd35d",
                foodie_level: "Foodie",
                foodie_level_num: 2,
                name: "Mauzie Chau",
                profile_deeplink: "zomato://u/80000197",
                profile_image: "https://b.zmtcdn.com/data/user_profile_pictures/919/3c323532d6e4e74491ca57c8fa054919.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A",
                profile_url: "https://www.zomato.com/users/mauzie-chau-80000197?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1"
            }
        }
    }]
};

const setup = (props) => {
    const componentProps = {
        ...expectedProps,
        ...props
    };

    const component = shallow(<RestaurantReviews {...componentProps}/>);
    return component;
};


describe('RestaurantReviews component', () => {
    describe('Checking propTypes', () => {
        it('Should not throw error', () => {
            const restaurantReviewsError = checkProps(RestaurantReviews, expectedProps);
            expect(restaurantReviewsError).toBeUndefined();
        });
    });

    describe('RestaurantReviews render', () => {
        let wrapper = setup();
        
        it('Should render restaurant reviews without an error', () => {
            const restaurantReviewsComponent = findByTestAttr(wrapper, 'app-restaurant-reviews');
            expect(restaurantReviewsComponent.length).toBe(1);
        });

        it('Should render restaurant reviews user image without an error', () => {
            const userImg = findByTestAttr(wrapper, 'user-img');
            expect(userImg.length).toBe(2);
        });

        it('Should render restaurant reviews user name without an error', () => {
            const userName = findByTestAttr(wrapper, 'user-name');
            expect(userName.length).toBe(2);
        });

        it('Should render restaurant reviews review time without an error', () => {
            const reviewTime = findByTestAttr(wrapper, 'review-time');
            expect(reviewTime.length).toBe(2);
        });

        it('Should render restaurant reviews review text without an error', () => {
            const reviewText = findByTestAttr(wrapper, 'review-text');
            expect(reviewText.length).toBe(2);
        });
    })
});