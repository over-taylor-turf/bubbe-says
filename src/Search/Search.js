import React from 'react';
// import { Link } from "react-router-dom";
import FormControlled from './FormControlled';
import '../App.css';
import './Search.css';

function Search() {

    return (
        <>
        <h1>Search for a Yiddish word.</h1>
        <h2>If you're having trouble finding what you want, browse in the Dictionary section.</h2>

        <FormControlled />

        </>

        );
    }
    

export default Search;