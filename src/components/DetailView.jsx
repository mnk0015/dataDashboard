// src/components/DetailView.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function DetailView() {
  const { id } = useParams();
  const [detailData, setDetailData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch detailed data based on the ID
        const response = await fetch(`https://api.weatherbit.io/v2.0/current?city_id=${id}&key=b4b73220631b49c0a6f79e4298e75e68`);
        const jsonData = await response.json();
        setDetailData(jsonData.data[0]); // Assuming the API response is an object with a 'data' property containing an array
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]); // Fetch data when the ID changes

  return (
    <div>
      <h2>Detail View</h2>
      {detailData ? (
        <div>
          <p>City: {detailData.city_name}</p>
          <p>Temperature: {detailData.temp}</p>
          {/* Add more details as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default DetailView;
