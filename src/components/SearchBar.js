import React, { useState } from 'react';
import Search from "../images/search.png"

export default function SearchBar({ onSearch }) {
  const [term, setTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(term);
  };

  return (
    <form className="search" onSubmit={handleSubmit}>
      <input 
        className='search-recipe'
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="What to cook?"
      />
      <button className="search-button" type="submit">
        <img className='search-icon' src={Search} />
      </button>
    </form>
  );
}




