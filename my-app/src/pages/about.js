import React from 'react';
import Navbar from '../components/navbar.js'
import AboutPost from "../components/aboutPosts"
import './about.css'
import { Link } from 'react-router-dom';

function About(){

    return(
        <div className="About">
            <Navbar/>
            <div className="AboutBody">
                <div className="Bio">
                    <div className="ImageBio"></div>
                    <div className="BioData">
                        <br/>
                        Hey, my name's Rohan Nedungadi<br/>
                        <br/>
                        Computer Science Undergraduate<br/> 
                        Mahindra Ecole Centrale ,Mahindra University<br/>
                        MEC batch of 2021<br/>
                        {/* <br/> */}
                        <br/>
                        <br/>
                        Machine Learning | Systems | Web
                        {/* <img src="https://img.icons8.com/cotton/64/000000/circled-chevron-down.png"/> */}


                    </div>

                </div>
                <div>
                </div>
                <h1>Experience</h1>
                <div className="Experience">
                    <AboutPost/>
                    <AboutPost/>
                    <AboutPost/>
                    <AboutPost/>
                </div>
                

            

            </div>
        </div>
    )
}

export default About