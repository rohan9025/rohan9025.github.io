import React,{ useState, useEffect } from 'react'
import './admin.css'
import Navbar from '../components/navbar'
import Post from '../components/post'
import Select from 'react-select';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    // useParams,
    Link,
    Redirect,
    browserHistory
  } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';



// const ReactMarkdown = require('react-markdown')



function Login(props){
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const [error,seterror]=useState(false)
    function validate(){
        if(username=="rohan9025" && password=="rohan123"){
            props.setLoggedin(true)
        }
        else{
            seterror(true)
        }
    }
    return(
        <div className="LoginBox">
            <div className="HeaderBox">Admin Login</div>
            <div className="">Username : <input id="loginInput"type="text" onChange={(e)=>setUsername(e.target.value)}/></div>
            <div className="">Password : <input id="loginInput"type="password"onChange={(e)=>setPassword(e.target.value)} /></div>
            <div ><button className="SubmitButton" onClick={()=>validate()}>Login</button><button className="SubmitButton"><Link to="/">Back</Link></button></div>
            {error && <div>! Invalid Credentials</div>}
        </div>

    )
}
function ViewPosts(props){

    const rendercurrentposts = postings=>{
        console.log(postings.section)
        return (
            <div style={{backgroundColor: postings.section}}>
                <div>{postings.title} </div>
                <div><button>Edit</button><button>Delete</button></div>
            </div>
        )
    }
    return(
        
        <div className="ViewPosts">
            <SwitchBar setAddORview={props.setAddORview} addORview={props.addORview}/>
            <div className="viewGrid">
                {props.posts.map((postings)=>rendercurrentposts(postings))}
            </div>
        </div>
    )
}

function SwitchBar(props){
    return(
        <div><button onClick={()=>props.setAddORview(false)}>View</button><button onClick={()=>props.setAddORview(true)} >Add</button></div>
    )
}
function AddPost(props){

    const [content,setContent]=useState("")
    const [title,setTitle]=useState("")
    const [dp,setDp]=useState("")
    const [gImg1,setgImg1]=useState("")
    const [gImg2,setgImg2]=useState("")
    const [gImg3,setgImg3]=useState("")
    const images=[gImg1,gImg2,gImg3]

    const [section,setSection]=useState("mediumaquamarine")

    async function posting(){
        let singlepost = {
            "content":content,
            "title":title,
            "dp":dp,
            "images":images,
            "section":section,
        }
        console.log(props.posts)
        props.setPosts([singlepost].concat(props.posts))
        console.log(props.posts)

    }

    return(
        <div className="AddPost">
            {/* <Navbar/> */}
            <SwitchBar setAddORview={props.setAddORview} addORview={props.addORview}/>
            <div className="FormBox">
                <div>
                    <div>Section :</div> 
                    <div>
                        <input
                            type="radio"
                            value="mediumaquamarine"
                            checked={section === "mediumaquamarine"}
                            onChange={(e)=>setSection(e.target.value)}
                        />
                        Travel Diary                           
                        
                        <input
                            type="radio"
                            value="lightskyblue"
                            checked={section === "lightskyblue"}
                            onChange={(e)=>setSection(e.target.value)}
                        />
                        Projects
                        
                        <input
                            type="radio"
                            value="lightsalmon"
                            checked={section === "lightsalmon"}
                            onChange={(e)=>setSection(e.target.value)}
                        />
                        Movies

                    </div>
                   
                    {/* <div></div> */}
                </div>
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
                    <div><input id= "content-input" type="text" onChange={(e)=>{setDp(e.target.value)}}></input></div>
                </div>
                <div>
                    <div>Gallery Image 1 :</div>
                    <div><input id= "content-input"type="text" onChange={(e)=>{setgImg1(e.target.value)}}></input></div>
                </div>
                <div>
                    <div>Gallery Image 2 :</div>
                    <div><input id= "content-input"type="text" onChange={(e)=>{setgImg2(e.target.value)}}></input></div>
                </div>
                <div>
                    <div>Gallery Image 3 :</div>
                    <div><input id= "content-input"type="text" onChange={(e)=>{setgImg3(e.target.value)}}></input></div>
                </div>
                <div className="Preview">
                    <Post title={title} content={content} displayPic={dp} galleryImages={images} bckgcolor={section}/>
                </div>
                <div className="Preview">
                   <button id="PostingButton" onClick={()=>posting()}>Post</button>
                </div>
            </div>
            
                
        </div>
    )
}
function Admin(props){
    const [loggedin,setLoggedin]=useState(false)
    const [addORview, setAddORview]=useState(false)   
    
    return(
        <div className = "Admin">
            <Navbar/>
            {!loggedin&&<Login  setLoggedin={setLoggedin}/>    }
            { loggedin &&addORview &&<AddPost posts={props.posts} setPosts={props.setPosts} addORview={addORview} setAddORview={setAddORview}/>}    
            { loggedin && !addORview && <ViewPosts posts={props.posts} setPosts={props.setPosts} addORview={addORview} setAddORview={setAddORview}/>}  
        </div>
    )
}

export default Admin