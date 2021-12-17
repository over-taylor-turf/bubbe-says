// src/components/Card.js
import React from 'react';
import yiddishword from '../WordData/Data';

function Word({yiddishword}) {
  return(
    <>
        <h2>{yiddishword[0].word}, {yiddishword[0].phonetic_spelling}</h2>
        <h3>{yiddishword[0].definition}</h3>
        <h3><em>{yiddishword[0].example}</em></h3>
    </>
  );
}

export default Word;