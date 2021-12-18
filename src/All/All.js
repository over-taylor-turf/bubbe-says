import React from 'react';
// import { Link } from "react-router-dom";
import '../App.css';
import './All.css'
import { yiddishword } from '../WordData/Data';
import Menu from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

function All() {

const mapped = yiddishword.map((individualword, index) => {
    return (
        <div key={individualword.id}>
        <p className='key-word'><strong>{individualword.word.toUpperCase()}</strong></p>
        <p>[{individualword.phonetic_spelling}]</p>
        <p>{individualword.definition}</p>
        <p><em>{individualword.example_sentence}</em></p>
        <br />
        </div>
    );
});

    return (
        <>
            <Menu/>
            <div className="allwords-wrapper">
            <h1 className='dictionary-title first'>My Bubbe Says...</h1>
            <h2 className='dictionary-title second'>ווערטערבוך</h2>
            <h3 className='dictionary-title third'>A Complete List</h3>
            <br />
            <h5>{mapped}</h5>
            </div>
            <Footer/>
        </>

        );
    }
    

export default All;