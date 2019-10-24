import React, { useState } from 'react';

export const useFilter = () => {
    const [sortBy, setSortBy] = useState('');
    const [orderBy, setOrderBy] = useState('');

    return {sortBy, setSortBy, orderBy, setOrderBy};
};
