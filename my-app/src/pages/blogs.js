import React from 'react';
// import Navbar from '../components/navbar.js'
import './home.css'
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar'
import './blogs.css'
import Post from '../components/post'
const ReactMarkdown = require('react-markdown')



function Body(){
    const input = '# This is a header\n\nAnd this is a paragraph'

    return(
        <div className="Body">
            <div className="LeftMenu">
                <ul>
                </ul>
            </div>
            <div className="Posts">
                <ul>
                    <li><Post title="Gokarna" 
                        content={input}
                    /></li>
                     <li><Post title="Goa" 
                        content=
                        "yo whats up dman."
                    /></li>

                </ul>
            </div>


        </div>
    )
}
function Blogs(){
    return(
        <div className="Blogs">
            <Navbar/>
            <Body/>
        </div>
    )

}

export default Blogs