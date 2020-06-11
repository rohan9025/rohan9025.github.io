import React from 'react';
// import Navbar from '../components/navbar.js'
import './home.css'
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar'
import './blogs.css'
import Post from '../components/post'
const ReactMarkdown = require('react-markdown')



function Body(props){

    return(
        <div className="Body">
            <div className="LeftMenu">
                <ul>
                </ul>
            </div>
            <div className="Posts">
                <ul>
                    {/* <li><Post title="Gokarna" 
                        content="lmao"
                    /></li>
                     <li><Post title="Goa" 
                        content=
                        "yo whats up dman."
                    /></li> */}

                </ul>
            </div>


        </div>
    )
}
function Blogs(props){
    return(
        <div className="Blogs">
            <Navbar/>
            <Body section={props.section}/>
        </div>
    )

}

export default Blogs