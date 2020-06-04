import React,{ useState, useEffect } from 'react'
import './admin.css'
import Navbar from '../components/navbar'


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
                    <div><textarea id="content-input-area"  onChange={(e)=>{setContent(e.target.value)}} ></textarea></div>
                </div>
                <div>
                    {content}
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