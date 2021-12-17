// src/components/SearchList.js
import React from 'react';
import Word from './Word';
import yiddishword from '../WordData/Data';

function SearchList({ yiddishword }) {
  const filtered = yiddishword.map(word =>  <Word id={yiddishword[0].id} key={yiddishword[0].id} />); 
  return (
    <div>
      {filtered}
    </div>
  );
}

export default SearchList;