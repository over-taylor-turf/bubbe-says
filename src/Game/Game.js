import React, { useState } from 'react';
// import { Link } from "react-router-dom";
import '../App.css';
import './Game.css'
import { yiddishword } from '../WordData/Data';
import Menu from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

function Game() {

    const random1 = Math.floor(Math.random() * 23)
    const random2 = (random1 + 1)
    const random3 = (random1 + 2)

    const [result, setResult] = useState();  
    const [color, setColor] = useState('black');  

    const handleCorrectGuess = () => {
        setResult('Mazel Tov!')
        setColor('correct')
        letsGo();
      }
    
      const handleWrongGuess = () => {
        setResult('Try another one, schmegegge.')
        setColor('incorrect')
      }

    const letsGo = () => {
        const headsortails = Math.floor(Math.random() * 3);
        console.log(headsortails);
        if (headsortails === 0) {
            return(
                <>
                <h2 className="game-intro">The Yiddish word for: "{yiddishword[random2].definition}."</h2>
                <br/>
                <p>Is it {yiddishword[random1].word}?<br/>
                Or, maybe... {yiddishword[random2].word}?<br/>
                Perhaps even, {yiddishword[random3].word}?</p>
                <br/>
                <div className="button-wrapper">
                <button className="game-button1" onClick={() => handleCorrectGuess()}>{yiddishword[random2].word}</button>
                <button className="game-button2" onClick={() => handleWrongGuess()}>{yiddishword[random1].word}</button>
                <button className="game-button3" onClick={() => handleWrongGuess()}>{yiddishword[random3].word}</button>
                </div>
                </>
            )
        } else if (headsortails === 1) {
            return(
                <>
                <h2 className="game-intro">The Yiddish word for: "{yiddishword[random2].definition}."</h2>
                <br/>
                <p>Is it {yiddishword[random2].word}?<br/>
                Or, maybe... {yiddishword[random1].word}?<br/>
                Perhaps even, {yiddishword[random3].word}?</p>
                <br/>
                <div className="button-wrapper">
                <button className="game-button1" onClick={() => handleWrongGuess()}>{yiddishword[random3].word}</button>
                <button className="game-button2" onClick={() => handleCorrectGuess()}>{yiddishword[random2].word}</button>
                <button className="game-button3" onClick={() => handleWrongGuess()}>{yiddishword[random1].word}</button>
                </div>
                </>
            )
        } else {
            return(
                <>
                <h2 className="game-intro">The Yiddish word for: "{yiddishword[random2].definition}."</h2>
                <br/>
                <p>Is it {yiddishword[random3].word}?<br/>
                Or, maybe... {yiddishword[random2].word}?<br/>
                Perhaps even, {yiddishword[random1].word}?</p>
                <br/>
                <div className="button-wrapper">
                <button className="game-button1" onClick={() => handleWrongGuess()}>{yiddishword[random3].word}</button>
                <button className="game-button2" onClick={() => handleWrongGuess()}>{yiddishword[random1].word}</button>
                <button className="game-button3" onClick={() => handleCorrectGuess()}>{yiddishword[random2].word}</button>
                </div>
                </>
            )

        }
    }
    


        return (
            <>

                <Menu/>
                <h1>Test your Yiddish Knowledge</h1>
                <br />
                <br />
                <p>{letsGo()}</p>
                <p className={color}>{result ? result : 'Take a guess.'}</p>


                <Footer/>

            </>
    
            );
        }
        
    
    export default Game;