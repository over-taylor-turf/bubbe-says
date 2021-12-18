import React from 'react';
// import { Link } from "react-router-dom";
import '../App.css';
import Menu from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

function About() {

    return (
        <>
            <Menu/>
            <h1>Hi, I'm Taylor.</h1>
            <p>My bubbe's name is Gussie.</p>
            <p>I am a former educator with a Master's Degree in Applied Linguistics from Columbia University. I am deeply curious about language acquisition—whether it be JavaScript, Python, or Yiddish. As such, a career as a software engineer—with infinite frameworks, libraries and languages to learn—excites me as an individual and a professional. Like all languages, I code with the intention of clear communication and collaboration with my community.</p>
            <Footer/>
        </>

        );
    }
    

export default About;