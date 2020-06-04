import React from 'react'
import './admin.css'
function Admin(){
    return(
        <div className = "Admin">
            <div className="LoginBox">
                <div className="HeaderBox">Admin Login</div>
                <div className="">Username : <input id="loginInput"type="text" /></div>
                <div className="">Password : <input id="loginInput"type="password" /></div>
                <div ><button className="SubmitButton">Login</button></div>

            </div>
        </div>
    )
}

export default Admin