import React,{useState} from 'react'
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
    const [like,setlike]=useState(false)
    return(

        <div className="Post">
            <div className="Left" style={{backgroundColor: props.bckgcolor}}>
                <div className="Likes" > <button className="LikesButton" onClick={()=>setlike(!like)}>
                    {like&&<img src="https://img.icons8.com/dusk/64/000000/two-hearts.png"/>}
                    {!like &&<img src="https://img.icons8.com/wired/64/000000/two-hearts.png"/>}
                    </button></div>

            </div>
            <div className="Right">
                <div className="Title">

                    <div className="PostName">{props.title}</div>
                    <div className="ImagePost" 
                    style={{"backgroundImage":`url(${props.displayPic})`}}/> 

                </div>
                <div className="Content" dangerouslySetInnerHTML={{__html:props.content}}>
                    {/* <p> */}
                    {/* <ReactMarkdown source={props.content} /> */}
                    {/* </p> */}
                    {/* <iframe style={{"height":"500px", "width":"700px"}}
                    src="https://docs.google.com/document/d/1cRd7YWFKj1nRVZWL89oAJmlOmxN8guJKG3d_KlsDy84/edit?usp=sharing"></iframe> */}
                </div>
                <div className="Images">
                    <Slideshow galleryImages={props.galleryImages}/>
                </div>
            </div>
            
        </div>

    )
    
}

export default Post