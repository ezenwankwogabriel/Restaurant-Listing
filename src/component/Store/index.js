import React, { createContext, useState, useContext } from 'react';

export const GlobalStoreContext = createContext({
  locations: [],
  options: {},
  sortType: "Location",
  value: "",
  message: "Enter Location to search",
  restaurantResult: [],
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
  });

  return (
    <GlobalStoreContext.Provider value={[globalStore, setGlobalStore]}>
      {children}
    </GlobalStoreContext.Provider>
  );
}
 
export default ContextProvider;
