import './App.css'

// src/App.jsx
import React, { useEffect, useState } from 'react';

function App() {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?key=b4b73220631b49c0a6f79e4298e75e68`);
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      {/* Your components will go here */}
    </div>
  );
}

export default App;
