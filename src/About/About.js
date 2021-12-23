import React from 'react';
import { Link } from "react-router-dom";
import '../App.css';
import './About.css';
import Menu from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

function About() {

    return (
        <>
            <Menu/>
            <img id='nanny3' src='https://res.cloudinary.com/overturf/image/upload/v1639858793/IMG-5152_dlwrsa.jpg' alt='family of five, outside their house in California, black and white, 1947'/>

            <h1 className="about-intro">Hi, I'm Taylor,</h1>
            <h2 className="about-intro2">and my bubbe says I'm a <em>mensch</em>.</h2>
            <p className="about-main">I am a former educator with a Master's Degree in Applied Linguistics from Columbia University. I am deeply curious about language acquisition—whether it be JavaScript, Python, or Yiddish. In addition to being a software engineer, I am also the great-granddaughter of Gussie Ratner: the only surviving member of her family after the Holocaust. I am incredibly passionate about the preservation of all the distinct words and phrases my family uses to communicate their connection to the past, and hopefully the future. My Bubbe Says was coded with the goal of helping us all remember the difference between a <em>shlimazel</em> and a <em>schmegegge</em>, a <em>schtick</em> and a <em>schmuck</em>, to <em>kvell</em> and to <em>kvetch</em>. Life is better with your <em>meshuggeneh</em> <em>mishpucha</em>.<br/><br/>
            
            <div className="contact-section">
            <a href="https://www.linkedin.com/in/tayloroverturf/" target="_blank" rel="noreferrer">
            <i class="fab fa-linkedin"></i>&nbsp;LinkedIn</a><br/>
            <a href="https://dev.to/stackoverturf" target="_blank" rel="noreferrer">
            <i class="fab fa-dev"></i>&nbsp;dev.to Blog</a><br/>
            <a href="https://github.com/over-taylor-turf" target="_blank" rel="noreferrer">
            <i class="fab fa-github-square"></i>&nbsp;GitHub</a><br/>
            <a href="https://github.com/over-taylor-turf/bubbe-says" target="_blank" rel="noreferrer">
            <i class="fas fa-pen-square"></i>&nbsp;Read Me File</a>
            <Link to='/game'><p className="secret-game">סוד שפּיל</p></Link>
            </div>

            </p>

            <Footer/>
        </>

        );
    }
    

export default About;