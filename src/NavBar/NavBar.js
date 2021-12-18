import React, { useState, useEffect } from 'react'; 
import { Link } from "react-router-dom";
import '../App.css';
import './NavBar.css';

const Menu = ( ) => {

  const [hamburger, setHamburger] = useState(false); 

  const handleClick = () => {

    setHamburger(!hamburger); 

  }

    //  Use Effect
     useEffect(() => {
       handleHamburger();
       }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const handleHamburger = () => {

      if (hamburger === true) {

        return (

            <div id="myLinks">

            <Link to='/all'><p>Dictionary</p></Link>
          
            <Link to='/search'><p>Find a Word</p></Link>
          
            <Link to='/submit'><p>Submit a Word</p></Link>

            <Link to='/about'><p>About</p></Link>
        
           </div>)

      } else {

      return (
        <>
        </>
      )
        
      }
  }


    return (
        <div className="header-container">
        <Link to='/'><p className="my-bubbe-says-hebrew">זאָגט מײַן באָבע</p></Link>
        <div className="hamburger-menu">

                  <span id="icon" onClick={() => {handleClick()}}>
                    <i class="fas fa-bars"></i>
                  </span>

                  {handleHamburger()}

        </div>
        </div>

    );
  }


  export default Menu;
  