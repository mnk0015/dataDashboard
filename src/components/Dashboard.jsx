// src/components/Dashboard.jsx
import React, { useEffect, useState } from 'react';
import ListView from './ListView';
import SearchBar from './SearchBar';
import Filters from './Filters';

function Dashboard() {
  // State for fetched data
  const [data, setData] = useState([]);

  // Fetch data using useEffect
  useEffect(() => {
    const fetchData = async () => {
      // Fetch data from API
      // Use your API fetching logic here
      // For demo purposes, let's assume fetchedData is an array of objects
      const fetchedData = await fetch('https://api.weatherbit.io/v2.0/current?key=b4b73220631b49c0a6f79e4298e75e68');
      const jsonData = await fetchedData.json();
      setData(jsonData);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Weather Dashboard</h1>
      <SearchBar data={data} setData={setData} />
      <Filters />
      <ListView data={data} />
    </div>
  );
}

export default Dashboard;
