import React,{ useState, useEffect } from 'react'
import './aboutPosts.css'


function AboutPost(){
    return(
        <div className="AboutPost">
            <div className="DisplayImg">
               {/* <p>Rochester Instritute of Technology</p>  */}
            </div>
            <div className="Content">
                <div className="Header">
                    <div className="Position">Summer Research Program</div> 
                    <div className="Place">Rochester Institute of Technology - NY,USA</div> 
                    <div className="Duration">1 June 2020 - 6 August 2020 </div>                     
                </div>
                <div className="Info">
                    <ul>
                        <li>research</li>
                        <li>research</li>
                        <li>research</li>
                        <li>research</li>
                        <li>research</li>
                        <li>research</li>

                    </ul>

                </div>
                
            </div>

        </div>
    )

}


export default AboutPost