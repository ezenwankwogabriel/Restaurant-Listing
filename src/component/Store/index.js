import React, { createContext, useState } from 'react';

export const GlobalStoreContext = createContext({
  locations: [],
  options: {},
  sortType: "Location",
  value: "",
  message: "Enter Location to search",
  restaurantResult: [],
})

function Store ({children}) {
  const [ globalStore, setGlobalStore ] = useState({
    locations: [],
    options: {},
    sortType: "Location",
    value: "",
    message: "Enter Location to search",
    restaurantResult: [],
  });

  return (
    <GlobalStoreContext.Provider value={[globalStore, setGlobalStore]}>
      {children}
    </GlobalStoreContext.Provider>
   );
}
 
export default Store;
