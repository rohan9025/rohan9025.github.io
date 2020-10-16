import React from 'react';
import Navbar from '../components/navbar.js'
// import AboutPost from "../components/aboutPosts"
import './about.css'
// import { Link } from 'react-router-dom';
import PostsForAbout from '../components/aboutPosts';

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
                        Ecole Centrale School of Engineering<br/>
                        Mahindra University<br/>
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
                <PostsForAbout/>
                

            

            </div>
        </div>
    )
}

export default About