import React, { useState, useEffect } from 'react';
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
    const headsortails = Math.floor(Math.random() * 3);

    const [result, setResult] = useState();  
    const [color, setColor] = useState('black');
    const [randomOrder, setRandomOrder] = useState(0);  

    const handleCorrectGuess = () => {
        setResult('Mazel Tov!')
        setColor('correct')
        gameLogic();
      }
    
      const handleWrongGuess = () => {
        setResult('Try another one, schmegegge.')
        setColor('incorrect')
      }

    useEffect(() => {
        setRandomOrder(headsortails);
    }, [])

    // const randomOrder = () => {
    //     const headsortails = Math.floor(Math.random() * 3);
    //     return headsortails;
    // }

    const gameLogic = () => {
        // const headsortails = Math.floor(Math.random() * 3);
        // console.log(headsortails);
        if (randomOrder === 0) {
            return(
                <>
                <h2 className="game-intro">The Yiddish word for: "<span className="emphasized">{yiddishword[random2].definition}</span>."</h2>
                <br/>
                <p className="options">Is it {yiddishword[random1].word}?<br/>
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
        } else if (randomOrder === 1) {
            return(
                <>
                <h2 className="game-intro">The Yiddish word for: "<span className="emphasized">{yiddishword[random2].definition}</span>."</h2>
                <br/>
                <p className="options">Is it {yiddishword[random2].word}?<br/>
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
                <h2 className="game-intro">The Yiddish word for: "<span className="emphasized">{yiddishword[random2].definition}</span>."</h2>
                <br/>
                <p className="options">Is it {yiddishword[random3].word}?<br/>
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
                {/* <button onClick={() => letsGo()}>Let's go!</button> */}
                <p>{gameLogic()}</p>
                <p className={color}>{result}</p>

                <Footer/>

            </>
    
            );
        }
        
    
    export default Game;