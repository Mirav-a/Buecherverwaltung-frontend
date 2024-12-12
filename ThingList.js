import React, { useState, useEffect } from 'react';

function ThingList() {
  const [things, setThings] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:8080/api/things');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setThings(data);
      } catch (error) {
        setError(error.message);
      }
    }
    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Things</h1>
      <ul>
        {things.map(thing => (
          <li key={thing.id}>
            {thing.name} - {thing.price}€
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ThingList;
