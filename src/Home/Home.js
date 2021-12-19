import React, { useState, useEffect } from 'react';
import { yiddishword } from '../WordData/Data';
// import { Link } from "react-router-dom";
import '../App.css';
import './Home.css';
import Footer from '../Footer/Footer';
import Menu from '../NavBar/NavBar';

function Home() {
    
    // Refresh the page every 5 seconds.
    setTimeout(() => {
        window.location.reload();
      }, 5000)

    // Random Number Variables
    const random = Math.floor(Math.random() * 23)

    return (
        <>
        <header>

            <Menu/>
        </header>

        <div className="container">
            <h1 className='title'>My bubbe says <strong className="bold-text">{yiddishword[random].word}</strong>.</h1>
            <br/>
            <div id='grid-container'>
            <img id='nanny' src='https://res.cloudinary.com/overturf/image/upload/v1639786175/IMG-5145_1_vks3ih.jpg' alt='older woman in teal'/>
            <div id='main-text'>
            <h2>[{yiddishword[random].phonetic_spelling}]</h2>
            <br />
            <h2>{yiddishword[random].definition}</h2>
            <br />
            <h3><em>{yiddishword[random].example_sentence}</em></h3>
            </div>
            </div>
        </div>
        
        <Footer/>
        </>
        );
    }
    

export default Home;