import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <div className="Navbar">
            <div className="Heading"><h2><Link to = "/admin">Rohan R Nedungadi</Link></h2></div>
            <div className="NavButtons">
                <div><Link to="/home">Home</Link></div>
                <div><Link to="/travel">Travel Diaries</Link></div>
                <div><Link to="/movies">Movies</Link></div>
                <div><Link to="/projects">Projects</Link></div>
                <div><Link to="/about">About</Link></div>

            </div>
        </div>
    )
}

export default Navbar