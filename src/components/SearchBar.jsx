// src/components/SearchBar.jsx
import React, { useState } from 'react';

function SearchBar({ data, setData }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    // Filter data based on search term
    const filteredData = data.filter(item => item.name.toLowerCase().includes(term.toLowerCase()));
    setData(filteredData);
  };

  return (
    <div>
      <h3>Search Bar</h3>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
}

export default SearchBar;
