import React, { useState } from 'react';
import { yiddishword } from '../WordData/Data';

const FormControlled = (props) => {

  const [searchState, setSearchState] = useState('');
  const [displayState, setDisplayState] = useState(); 

      const handleSubmit = (event) => {
        setSearchState(searchState);
        console.log('The search word is: ', searchState)
        let displayState = (yiddishword.filter(searchedword => searchedword.word === searchState))
        console.log('The display word is: ', displayState[0].word)
        setDisplayState(displayState)
      }

      // let searchword = yiddishword.filter(searchedword => searchedword.word === searchState)
      // console.log(searchword[0].word);

      const handleSearchChange = (event) => {
        console.log(searchState)
        let input = (event.target.value).toLowerCase()
        setSearchState(input);
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

        <div>{displayState ? displayState[0].word : ''}</div>
        <div>{displayState ? displayState[0].phonetic_spelling : ''}</div>
        <div>{displayState ? displayState[0].definition : ''}</div>
        <div><em>{displayState ? displayState[0].example_sentence : ''}</em></div>

    </div>
  );
};

export default FormControlled;
