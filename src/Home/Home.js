import React from 'react';
import { yiddishword } from '../WordData/Data';
// import { Link } from "react-router-dom";
import '../App.css';
import './Home.css';
import Footer from '../Footer/Footer';
import Menu from '../NavBar/NavBar';

function Home() {

    // Random Number Variables
    const randomword = Math.floor(Math.random() * 10)

    return (
        <>
        <header>

            <Menu/>

        </header>
        <div className="container">
            <h1 className='title'>My bubbe says <strong className="bold-text">{yiddishword[randomword].word}</strong>.</h1>
            <br/>
            <h2>[{yiddishword[randomword].phonetic_spelling}]</h2>
            <h2>{yiddishword[randomword].definition}</h2>
            <h3><em>{yiddishword[randomword].example_sentence}</em></h3>

        </div>
        
        <Footer/>
        </>
        );
    }
    

export default Home;