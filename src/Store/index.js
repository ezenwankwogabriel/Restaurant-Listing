import React, { createContext, useState, useContext, useEffect } from 'react';
import { api, getCategories, getRestaurantListing } from "../api";


export const GlobalStoreContext = createContext({
  locations: [],
  options: {},
  sortType: "Location",
  value: "",
  message: "Enter Location to search",
  restaurantResult: [],
  categories: []
})

export const useMyContext = () => useContext(GlobalStoreContext);

function ContextProvider ({children}) {
  const [ globalStore, setGlobalStore ] = useState({
    locations: [],
    options: {},
    sortType: "Location",
    value: "",
    message: "Enter Location to search",
    restaurantResult: [],
    categories: []
  });

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const [ categories, restaurants ] = await Promise.all([
          getCategories(),
          getRestaurantListing(),
        ]);

        setGlobalStore(prev => ({ ...prev, restaurantResult: restaurants.restaurants, categories: categories.categories }));
      } catch (error) {
        console.log(error)
      }
    }
    fetchCategories();
  }, [])

  return (
    <GlobalStoreContext.Provider value={[globalStore, setGlobalStore]}>
      {children}
    </GlobalStoreContext.Provider>
  );
}
 
export default ContextProvider;
