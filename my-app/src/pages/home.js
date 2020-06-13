
import React from 'react';
import Navbar from '../components/navbar.js'
import './home.css'
import { Link } from 'react-router-dom';

function Home(){

    return(
        <div className="Home">
            <Navbar/>
            <div className="CentralBox">
                <div className="Image"/>
                {/* <div className="Name"><h2>Rohan R Nedungadi</h2></div> */}
                <div className="Navigation">
                    {/* <div><Link to="/travel">Travel Diary</Link></div>
                    <div><Link to="/movies">Movie Discussions</Link></div>
                    <div><Link to="/thoughts">Random Thoughts</Link></div>
                    <div><Link to="/projects">Projects</Link></div> */}
                    <div><Link to="/blogs">Blogs</Link></div>
                    <div><a href="https://github.com/rohan9025">GitHub</a></div>
                    <div><a href="">Resume</a></div>


                </div>

            </div>
            

        </div>
    )
}

export default Home