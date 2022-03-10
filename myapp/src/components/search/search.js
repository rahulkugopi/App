import React from "react";
import { useState } from "react";
import '../search/search.css';

function Search(props) {
  const { onSearch } = props;

  const [searchText, setSearchText] = useState('')

  const handleInput = (e) => {
    const text = e.target.value
    setSearchText(text)
  }

  const handleEnterKeyPressed = (e) => {
    if(e.key=== 'Enter') {
      onSearch(searchText)
    }
  }

  return (
    <div class="container">
      <div class="inner-section">
				<div class="form-section">
        <input
          className="input"
          onChange={handleInput}
          onKeyPress={handleEnterKeyPressed}
          type="text"
          value={searchText}
          placeholder="Search your movies"
        />
				</div>
			</div>
    </div>
  );
}

export default Search;