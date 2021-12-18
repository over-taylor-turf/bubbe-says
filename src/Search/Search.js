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

        <img id='nanny2' src='https://res.cloudinary.com/overturf/image/upload/v1639858082/IMG-5150_iyyoy9.jpg' alt='mother and daughter in black and white'/>

        <div className ="search-wrapper">
        <h1>My bubbe says...</h1>

        <FormControlled />
        </div>

        <Footer />

        </>

        );
    }
    

export default Search;