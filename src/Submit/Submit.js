import React from 'react';
import { useEffect, useState } from "react";
import '../App.css';
import './Submit.css';
import Menu from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
const { GoogleSpreadsheet } = require('google-spreadsheet');
const creds = require('../client_secret.json');
let doc = {};

function Submit() {
    const [email, setEmail] = useState("");
    const [word, setWord] = useState("");
    const [definition, setDefinition] = useState("");
    const [example, setExample] = useState("");
    const [bubbe, setBubbe] = useState("");
    const [buttonText, setButtonText] = useState('Submit')


  const makeInitialCall = async () => {
    doc = new GoogleSpreadsheet('184Y9hyAfhOfMntOM5hVK8zd0MbZt9PkIgL9PKs3adkk')
        await doc.useServiceAccountAuth(creds)
        await doc.loadInfo()
        let dataRows = await doc.sheetsByIndex[0].getRows();
        // console.log(doc.sheetsByIndex[0]);
        // console.log(dataRows);
  }

  useEffect(() => {
    makeInitialCall()
  }, [])

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleWordChange = (e) => {
    setWord(e.target.value);
  };

  const handleDefinitionChange = (e) => {
    setDefinition(e.target.value);
  };

  const handleExampleChange = (e) => {
    setExample(e.target.value);
  };

  const handleBubbeChange = (e) => {
    setBubbe(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault()
    setButtonText('Thank you!')
    let newRow = {
      email: email,
      word: word,
      definition: definition,
      example: example,
      bubbe: bubbe
    };

    let sheet = await doc.sheetsByIndex[0];
    sheet.addRow(newRow);
    setEmail('')
    setWord('')
    setDefinition('')
    setExample('')
    setBubbe('')
  };


    return (
        <>
            <Menu/>

            <div className="form-wrapper">
            <h1 className='submit-title'>What does your bubbe say?</h1>
            <h2 className='submit-subtitle'>Don't see your family's favorite Yiddish word or phrase? Please take a moment to submit it to our archives!</h2>
            <br/>
            <form id="myForm">
                
                <label for="email">Your Email Address</label><br/>
                <input  type="text" 
                        value={email}
                        onChange={handleEmailChange}
                        name="email" 
                        placeholder="bubbe@bubbe.com"/>
                <br/>

                <label for="word">Proposed Word</label><br/>
                <input  type="text"
                        value={word} 
                        onChange={handleWordChange}
                        name="word" 
                        placeholder="schvitz"/>
                <br/>

                <label for="definition">Definition</label><br/>
                <textarea type="text" 
                          name="definition" 
                          value={definition} 
                          onChange={handleDefinitionChange}
                          placeholder="Sweating profusely."/>
                <br/>

                <label for="example">Example Sentence</label><br/>
                <textarea 
                            type="text" 
                            name="example"
                            value={example}
                            onChange={handleExampleChange} 
                            placeholder="I was schvitzing so bad it looked like I dumped a bucket of water over my head."/>
                <br/>

                <label for="bubbe">Your Bubbe's Name</label><br/>
                <input type="text" 
                       name="bubbe" 
                       value={bubbe}
                       onChange={handleBubbeChange}
                       placeholder="Bubbe Gussie"/>
                <br/>
            </form>
            <button onClick={handleSubmit}>{buttonText}</button>
            </div>

            <Footer/>
        </>

        );
    }
    

export default Submit;