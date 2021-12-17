import React, { useState } from 'react';
import { yiddishword } from '../WordData/Data';

const FormControlled = (props) => {

  const [searchState, setSearchState] = useState('');

      const handleSubmit = (event) => {
        setSearchState(searchState);
        console.log('The word is: ', searchState)
        // if searchState.toLowerCase() === yiddishword.word {

        // }
      }

      const handleSearchChange = (event) => {
        console.log(searchState)
        setSearchState(event.target.value);
      }

  return (
    <div className="wrapper">

        <input
          onChange={handleSearchChange}
          value={searchState}
          type="text"
          className="form-control"
          name="word"
          placeholder="Verklempt"
        />

        <button onClick={handleSubmit}
                className="search-button">
        Search</button>

    </div>
  );
};

export default FormControlled;
