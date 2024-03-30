// src/components/ListView.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function ListView({ data }) {
  return (
    <div>
      <h2>List View</h2>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            <Link to={`/detail/${item.id}`}>
              {item.city_name}, {item.country_code}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListView;
