import React from 'react';
import { yiddishword } from '../WordData/Data';
// import { Link } from "react-router-dom";
import '../App.css';
import './Home.css';

function Home() {

    // Random Number Variables
    const randomword = Math.floor(Math.random() * 5)

    return (
        <>
        <header>
            <p className="my-bubbe-says-hebrew">זאָגט מײַן באָבע</p>
            <span><i class="fas fa-bars"></i></span>
        </header>
        <div className="container">
            <h1 className='title'>My bubbe says <strong className="bold-text">{yiddishword[randomword].word}</strong>.</h1>
            <h2>[{yiddishword[randomword].phonetic_spelling}]</h2>
            <h2>{yiddishword[randomword].definition}</h2>
            <h3><em>{yiddishword[randomword].example_sentence}</em></h3>

        </div>
            <footer className="footer">
            <h5>Designed & Coded with <span className="hebrew">חוצפה</span> by Taylor Overturf</h5>
            <h6>Seattle, Washington&nbsp; | &nbsp;December, 2021</h6>
            </footer>
        </>

        );
    }
    

export default Home;