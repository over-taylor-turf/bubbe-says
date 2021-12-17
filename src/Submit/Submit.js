import React from 'react';
// import { Link } from "react-router-dom";
import '../App.css';

function Submit() {

    return (
        <>
            <form>
                
                <label for="email">Your Email Address</label>
                <input type="text" name="email" placeholder="bubbe@bubbe.com"/>
                <br/>

                <label for="email">Proposed Word</label>
                <input type="text" name="word" placeholder="schvitz"/>
                <br/>

                <label for="email">Definition</label>
                <input type="text" name="definition" placeholder="Sweating profusely."/>
                <br/>

                <label for="email">Example Sentence</label>
                <input type="text" name="email" placeholder="I was schvitzing so bad it looked like I dumped a bucket of water over my head."/>
                <br/>

                <label for="email">Bubbe's Name</label>
                <input type="text" name="email" placeholder="Bubbe Gussie"/>
                <br/>

                <input type="submit" value="Submit"></input>

            </form>
        </>

        );
    }
    

export default Submit;