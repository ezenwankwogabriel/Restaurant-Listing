import React, { useState } from 'react';

export const useFilter = () => {
    const [sortBy, setSortBy] = useState('');
    const [orderBy, setOrderBy] = useState('');
    const [searchBy, setSearchBy] = useState('');

    return {sortBy, setSortBy, orderBy, setOrderBy, searchBy, setSearchBy};
};
