import React, { createContext, useState, useContext, useEffect } from 'react';
import { api } from "../api";


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
                const { data } = await api.get('categories');
                setCategories(data.categories);
                setIsGettingCategories(false);
            } catch (error) {
                setCategoriesError(error);
                setIsGettingCategories(false);
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
    }, []);

    return (
        <GlobalStoreContext.Provider value={{categories, isGettingCategories, categoriesError}}>
            {children}
        </GlobalStoreContext.Provider>
    );
}

export default ContextProvider;
