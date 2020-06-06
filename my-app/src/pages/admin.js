import React,{ useState, useEffect } from 'react'
import './admin.css'
import Navbar from '../components/navbar'
import Post from '../components/post'



const ReactMarkdown = require('react-markdown')



function Login(props){
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    function validate(){
        if(username=="rohan9025" && password=="rohan123"){
            props.setLoggedin(true)
        }
    }
    return(
        <div className="LoginBox">
            <div className="HeaderBox">Admin Login</div>
            <div className="">Username : <input id="loginInput"type="text" onChange={(e)=>setUsername(e.target.value)}/></div>
            <div className="">Password : <input id="loginInput"type="password"onChange={(e)=>setPassword(e.target.value)} /></div>
            <div ><button className="SubmitButton" onClick={()=>validate()}>Login</button></div>
        </div>

    )
}
function AddPost(){

    const [content,setContent]=useState("")
    const [title,setTitle]=useState("")
    const [dp,setDp]=useState("")
    const [gImg1,setgImg1]=useState("")
    const [gImg2,setgImg2]=useState("")
    const [gImg3,setgImg3]=useState("")
    const images=[gImg1,gImg2,gImg3]

    return(
        <div className="AddPost">
            <Navbar/>
            <div className="FormBox">
                <div>
                    <div>Tiltle :</div> 
                    <div><input id= "content-input" type="text" onChange={(e)=>{setTitle(e.target.value)}}></input></div>
                </div>
                <div>
                    <div>Content :</div> 
                    <div><textarea id="content-input-area"  onChange={(e)=>{setContent(e.target.value.toString())}} ></textarea></div>
                </div>
                <div>
                    <div>Display Image :</div>
                    <div><input type="text" onChange={(e)=>{setDp(e.target.value)}}></input></div>
                </div>
                <div>
                    <div>Gallery Image 1 :</div>
                    <div><input type="text" onChange={(e)=>{setgImg1(e.target.value)}}></input></div>
                </div>
                <div>
                    <div>Gallery Image 2 :</div>
                    <div><input type="text" onChange={(e)=>{setgImg2(e.target.value)}}></input></div>
                </div>
                <div>
                    <div>Gallery Image 3 :</div>
                    <div><input type="text" onChange={(e)=>{setgImg3(e.target.value)}}></input></div>
                </div>
                <div className="Preview">
                    <Post title={title} content={content} displayPic={dp} galleryImages={images}/>
                </div>
            </div>
            
                
        </div>
    )
}
function Admin(){
    const [loggedin,setLoggedin]=useState(true)   
    
    return(
        <div className = "Admin">
            {!loggedin&&<Login  setLoggedin={setLoggedin}/>    }
            { loggedin && <AddPost/>}      
        </div>
    )
}

export default Admin