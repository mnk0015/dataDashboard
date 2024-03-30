import React, { useState } from 'react';

const Filters = ({ onFilter }) => {
    const [filter, setFilter] = useState('');

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
        onFilter(e.target.value);
    };

    return (
        <div>
            <select value={filter} onChange={handleFilterChange}>
                <option value="">All</option>
                <option value="sunny">Sunny</option>
                <option value="cloudy">Cloudy</option>
                <option value="rainy">Rainy</option>
            </select>
        </div>
    );
};

export default Filters;
