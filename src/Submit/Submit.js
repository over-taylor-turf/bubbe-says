import React from 'react';
// import { Link } from "react-router-dom";
import '../App.css';
import './Submit.css';
import Menu from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

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
            <Menu/>

            <h1 className='submit-title'>What does your bubbe say?</h1>
            <h2>Don't see your family's favorite Yiddish word or phrase? Please take a moment to submit it to our archives!</h2>
            <br/>
            <form id="myForm">
                
                <label for="email">Your Email Address</label><br/>
                <input type="email" name="email" placeholder="bubbe@bubbe.com"/>
                <br/>

                <label for="word">Proposed Word</label><br/>
                <input type="text" name="word" placeholder="schvitz"/>
                <br/>

                <label for="definition">Definition</label><br/>
                <textarea type="text" name="definition" placeholder="Sweating profusely."/>
                <br/>

                <label for="example">Example Sentence</label><br/>
                <textarea type="text" name="example" placeholder="I was schvitzing so bad it looked like I dumped a bucket of water over my head."/>
                <br/>

                <label for="bubbe">Your Bubbe's Name</label><br/>
                <input type="text" name="bubbe" placeholder="Bubbe Gussie"/>
                <br/>
            </form>
            <button onClick={() => {SubForm()}}>Submit</button>

            <Footer/>
        </>

        );
    }
    

export default Submit;