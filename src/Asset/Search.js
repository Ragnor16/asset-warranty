import React from 'react'
import './Search.css'

function Search() {
  return (
    // <body className='search-bar'>
    <div className="search-container">
    <form class="search" action="">
  <input  class='search-input' type="search" placeholder="Search here..." required />
  <button className='search-btn' type="submit">Search</button>
</form>   
  </div>
  // </body>
  )
}

export default Search
