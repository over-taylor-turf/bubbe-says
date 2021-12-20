import React from 'react';
// import { Link } from "react-router-dom";
import FormControlled from './FormControlled';
import '../App.css';
import './Search.css';
import Menu from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

function Search() {

    return (
        <>
        <Menu />

        <div className='grid-container'>
        <img id='nanny2' src='https://res.cloudinary.com/overturf/image/upload/v1640018436/IMG-5149_bpmcpd.jpg' alt='mother and daughter in black and white'/>

        <div className="search-wrapper">
        <h1 className="my-bubbe-says">My bubbe says...</h1>

        <FormControlled />
        </div>

        </div>
        <Footer />
        </>

        );
    }
    

export default Search;