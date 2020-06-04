import React from 'react'
import './post.css'
import '../images/bg.png'
import { Slide } from 'react-slideshow-image';
import Slideshow from '../components/slideshow';
const ReactMarkdown = require('react-markdown')


function Post(props){

    // const divStyle = {
    //     // color: 'blue',
    //     backgroundImage: 'url('../images/bg.png')',
    //   };
        // const slideImages = [
        //     '../images/bg.png',
        //     '../images/gitdp.png',
        //     '../images/retro.jpeg'
        //   ];

        // const properties = {
        //     duration: 5000,
        //     transitionDuration: 500,
        //     infinite: true,
        //     indicators: true,
        //     arrows: true,
        //     pauseOnHover: true,
        //     onChange: (oldIndex, newIndex) => {
        //         console.log(`slide transition from ${oldIndex} to ${newIndex}`);
        //     }
        // }
    return(

        <div className="Post">
            <div className="Left">

            </div>
            <div className="Right">
                <div className="Title">

                    <div className="PostName">{props.title}</div>
                    <div className="ImagePost" />

                </div>
                <div className="Content">
                    <p>
                    <ReactMarkdown source={props.content} />
                    </p>
                </div>
                <div className="Images">
                    <Slideshow/>
                </div>
            </div>
            
        </div>

    )
    
}

export default Post