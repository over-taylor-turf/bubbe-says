import React from 'react';
// import { Link } from "react-router-dom";
import '../App.css';
import { yiddishword } from '../WordData/Data';

function All() {

const mapped = yiddishword.map((individualword, index) => {
    return (
        <div key={individualword.id}>
        <p><strong>{individualword.word.toUpperCase()}</strong></p>
        <p>[{individualword.phonetic_spelling}]</p>
        <p>{individualword.definition}</p>
        <p><em>{individualword.example_sentence}</em></p>
        <br />
        </div>
    );
});
    return (
        <>
            <h1>My Bubbe Says...</h1>
            <p>A Complete List</p>
            <br />
            <h5>{mapped}</h5>

        </>

        );
    }
    

export default All;