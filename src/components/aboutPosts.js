import React from 'react'
import './aboutPosts.css'
// import customerProfiling from "../images/customerProfiling.png"
import ModalExp from './modalexperience.js'
import ModalProject from './modalproject.js'

// import Modal from 'react-modal';

// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     // useParams,
//     Link,
//     Redirect,
//     browserHistory
//   } from 'react-router-dom';

function PostsForAbout(){
    // const [view,setView]=useState(false)
    // const [modalShow, setModalShow] = useState(false);
    
    return(
        <div className="PostsForAbout">
            <div className="ExperienceSection">
                <h1>Experiences</h1>
                <ModalExp/>
            </div>
            <div className="ProjectSection">
                <h1>Projects</h1>
                <ModalProject/>

            </div>

           
            
        </div>
    )
    
}


export default PostsForAbout