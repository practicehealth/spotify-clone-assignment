// SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = async () => {
    try {
      // Make a fetch request to the Spotify API
      const response = await fetch(`https://api.spotify.com/v1/search?q=${query}&type=track`, {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer YOUR_ACCESS_TOKEN', // Replace with a valid access token
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch data from Spotify API');
      }

      const data = await response.json();
      // Pass the search results to the parent component or a function
      onSearch(data.tracks.items);
    } catch (error) {
      console.error('Error:', error.message);
      // Handle errors accordingly
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
