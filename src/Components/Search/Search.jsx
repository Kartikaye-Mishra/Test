import React from 'react'
import './search.css'
export default function Search() {
  const handleClick = (e)=>{
    e.preventDefault();
    console.log('Search Clicked');
  }
  return (
    <form action="">

<div className="searchbar">
    <input type="text" placeholder='Where would you like to go?' >
        </input>
        <button onClick={handleClick}>search</button>
</div>

    </form>
  )
}
