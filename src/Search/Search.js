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

        <div className ="search-wrapper">
        <h1>My <em>bubbe</em> says...</h1>

        <FormControlled />
        </div>

        <Footer />

        </>

        );
    }
    

export default Search;