import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ListView = () => {
    const [weatherData, setWeatherData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            // Fetch weather data from API
            const response = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?key=b4b73220631b49c0a6f79e4298e75e68`);
            const data = await response.json();
            setWeatherData(data);
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Weather List View</h1>
            <ul>
                {weatherData.map((item, index) => (
                    <li key={index}>
                        <Link to={`/detail/${item.id}`}>{item.date}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListView;
