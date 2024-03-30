import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DetailView = () => {
    const { id } = useParams();
    const [weatherDetail, setWeatherDetail] = useState(null);

    useEffect(() => {
        const fetchDetail = async () => {
            // Fetch detail data using id
            const response = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily/${id}?key=b4b73220631b49c0a6f79e4298e75e68`);
            const data = await response.json();
            setWeatherDetail(data);
        };

        fetchDetail();
    }, [id]);

    return (
        <div>
            <h1>Weather Detail View</h1>
            {weatherDetail && (
                <div>
                    <h2>{weatherDetail.date}</h2>
                    <p>Temperature: {weatherDetail.temperature}</p>
                    <p>Humidity: {weatherDetail.humidity}</p>
                    <p>Wind Speed: {weatherDetail.wind_speed}</p>
                    {/* Add more details as needed */}
                </div>
            )}
        </div>
    );
};

export default DetailView;
