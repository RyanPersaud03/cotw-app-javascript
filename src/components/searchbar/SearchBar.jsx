import React from 'react';
import './searchBar.css';

const SearchBar = () => {
    return (
        <div className="search-container">
            <input type="text" placeholder="Search..." className="search-input" />
            <button type="submit" className="search-button">Search</button>
        </div>
    );
};

export default SearchBar;