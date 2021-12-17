import React from 'react';
// import { Link } from "react-router-dom";
import '../App.css';
import './Submit.css';

function Submit() {

    const SubForm = () => {
        fetch("https://api.apispreadsheets.com/data/POU9eZNdrU0j2Xc1/", {
            method: "POST",
            body: JSON.stringify({"data": {"email":"","word":"","definition":"","example":"","bubbe":""}}),
        }).then(res =>{
            if (res.status === 201){
                // SUCCESS
                alert('Thank you for submitting a word to My Bubbe Says!')
            }
            else{
                // ERROR
                alert('There was an error. Please try again!')
            }
        })
    }

    return (
        <>
            <form id="myForm">
                
                <label for="email">Your Email Address</label>
                <input type="email" name="email" placeholder="bubbe@bubbe.com"/>
                <br/>

                <label for="word">Proposed Word</label>
                <input type="text" name="word" placeholder="schvitz"/>
                <br/>

                <label for="definition">Definition</label>
                <textarea type="text" name="definition" placeholder="Sweating profusely."/>
                <br/>

                <label for="example">Example Sentence</label>
                <textarea type="text" name="example" placeholder="I was schvitzing so bad it looked like I dumped a bucket of water over my head."/>
                <br/>

                <label for="bubbe">Bubbe's Name</label>
                <input type="text" name="bubbe" placeholder="Bubbe Gussie"/>
                <br/>
            </form>
            <button onClick={() => {SubForm()}}>Submit</button>

        </>

        );
    }
    

export default Submit;