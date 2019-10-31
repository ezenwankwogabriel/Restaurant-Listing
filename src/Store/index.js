import React, { createContext, useState, useEffect } from 'react';
import { api, source, apiCancelToken, $axios } from "../api";

export const GlobalStoreContext = createContext({})

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
                if ($axios.isCancel(error)) { // handle return cancelled error
                } else {
                // handle error
                    setCategoriesError(error);
                    setIsGettingCategories(false);
                }
            }
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
