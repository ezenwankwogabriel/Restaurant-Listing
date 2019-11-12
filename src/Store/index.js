import React, { createContext, useState, useContext, useEffect } from 'react';
import { axios } from "axios";
import { api, source, apiCancelToken } from "../api";


export const GlobalStoreContext = createContext({})

export const useMyContext = () => useContext(GlobalStoreContext);

function ContextProvider ({children}) {
    const [ categories, setCategories ] = useState([]);
    const [ isGettingCategories, setIsGettingCategories ] = useState(false);
    const [ categoriesError, setCategoriesError ] = useState('');

    useEffect(() => {
        const fetchCategories = async () => {
            setIsGettingCategories(true);
            try {
                const { data } = await api.get('categories', { cancelToken: apiCancelToken});
                setCategories(data.categories);
                setIsGettingCategories(false);
            } catch (error) {
                console.log(error);
                // if (axios.isCancel(error)) {
                // } else {
                // // handle error
                //     setCategoriesError(error);
                //     setIsGettingCategories(false);
                // }
            }
            // try {
            //     const [ categories, restaurants ] = await Promise.all([
            //     getCategories(),
            //     getRestaurantListing(),
            //     ]);

            //     setGlobalStore(prev => ({ ...prev, restaurantResult: restaurants.restaurants, categories: categories.categories }));
            // } catch (error) {
            //     console.log(error)
            // }
        }
        fetchCategories();
        return () => {source.cancel('Operation canceled by the user.');}
    }, []);

    return (
        <GlobalStoreContext.Provider value={{categories, isGettingCategories, categoriesError}}>
            {children}
        </GlobalStoreContext.Provider>
    );
}

export default ContextProvider;
