import React,{ useState, useEffect } from 'react'
import './aboutPosts.css'
import customerProfiling from "../images/customerProfiling.png"

import {
    BrowserRouter as Router,
    Switch,
    Route,
    // useParams,
    Link,
    Redirect,
    browserHistory
  } from 'react-router-dom';



function RochesterInstituteTech(){
    return(
        <div className="AboutPost">
            <div className="DisplayImg">
               {/* <p>Rochester Instritute of Technology</p>  */}
            </div>
            <div className="Content">
                <div className="Header">
                    <div className="Position">Summer Research Program</div> 
                    <div className="Place">Rochester Institute of Technology - NY,USA (Virtual)</div> 
                    <div className="Duration">1 June 2020 - 6 August 2020 </div>                     
                </div>
                <div className="Info">
                    <ul>
                        <li>Worked under the guidance of Prof Jay Yang from Rit to develop research skills in the area of CyberSecurity.</li>
                        <li>My topic for the program was to learn and analyse the IDS / network monitoring system, Bro/Zeek. </li>
                        <li>My work included understanding the architecture uses and advantages of Zeek over its substitutes.</li>
                        <li>Now unlike other alternatives it has its own scripting language which can be used to deploy scripts to perform any kind of analysis such as feature extraction, custom logging, notice raising, ip flagging, portscan detections etc. It has its own custom datatypes and data structures tailored to network analyses.</li>
                        <li>The complete documentation of my experience from installation right up to testing used cases with it along with some mahcine learning with python is given in the below github link. </li>
                        <li>Github Repo : <a href="https://github.com/rohan9025/ZeekDoc" target="_blank">https://github.com/rohan9025/ZeekDoc</a></li>
                        <li>Apart from my primary work I also attended various seminars by experts in their field from RIT and Various Phd Students from around the globe as part of the program. We discussed topics such as Security in Iot and Health Systems, Deepfakes, uses of Adversarial networks in cyber security, Security in Software Systems, Security Hazards in System Caches, Social Engineering, Security with Human Interactions and Explainable AI</li>
                        <li>We also had cultural exchange meets where we discussed and shared our experiences from various parts of the world such as Netherland, Poland, Taiwan, England, USA and India. We discussed food movies, pandemic scenarios, personal interests and so on.</li>
                        <li>Was awarded a 1500 USD scholarship on admission to the program</li>

                    </ul>

                </div>
                
            </div>

        </div>
    )

}

function AvenueEcommerceLimited(){
    return(
        <div className="AboutPost">
            <div className="DisplayImg" 
            // style={{"backgroundImage":`url(https://cdn-images-1.medium.com/max/1600/1*2bPC6K2c4oJHp00IJxbskA.jpeg)`}}>
            // style={{"backgroundImage":`url(https://byrony.github.io/figure/customer_segment.jpg)`}}>
            style={{"backgroundImage":`url(${customerProfiling})`,"height":"110px"}}>

               {/* <p>Rochester Instritute of Technology</p>  */}
            </div>
            <div className="Content">
                <div className="Header" style={{"backgroundColor":"teal"}}>
                    <div className="Position">Summer Research Intern</div> 
                    <div className="Place">Avenue E-Commerce Ltd -Mumbai,India</div> 
                    <div className="Duration">May 2018 - July 2018 & July 2019 </div>                     
                </div>
                <div className="Info">
                    <ul>
                        <li>Worked Under Mr. Vikas Roy, Chief Front End Executive, to research and develop a customer profiling algorithm.</li>
                        <li>Created a white paper with all my findings and workings of an algorithm to categorize customers based on past shopper experiences. </li>
                        <li>Had the great opportunity to learn and understand how customer profiling worked and get an in depth experience of how an E-commerce operated. </li>
                        <li>Following year was invited to continue working on my algorithm.</li>
                        <li>Became a python and machine learning intern where I developed a simple software to accomplish small tasks of my papers algorithms with ML instead of general statistics. Hence we were able to detect in prior certain customer behaviours. </li>
                        <li>The paper is an intellectual property of the firm as it contains crucial private information and hence cannot be displayed publicly</li>
                        {/* <li>research</li> */}

                    </ul>

                </div>
                
            </div>

        </div>
    )

}


function Poke2(){
    return(
        <div className="AboutPost">
            <div className="DisplayImg" 
            // style={{"backgroundImage":`url(https://cdn-images-1.medium.com/max/1600/1*2bPC6K2c4oJHp00IJxbskA.jpeg)`}}>
            // style={{"backgroundImage":`url(https://byrony.github.io/figure/customer_segment.jpg)`}}>
            style={{"backgroundImage":`url(${customerProfiling})`,"height":"110px"}}>

               {/* <p>Rochester Instritute of Technology</p>  */}
            </div>
            <div className="Content">
                <div className="Header" style={{"backgroundColor":"green"}}>
                    <div className="Title">Poke2</div> 
                    <div className="KeyWords">ReactJS, NodeJs,Mongo Atlas, Gitlab CI/CD, Heroku PaaS</div> 
                    <div className="Date">May 2018 - July 2018 & July 2019 </div>                     
                </div>
                <div className="Info">
                    <ul>
                        <li>Worked Under Mr. Vikas Roy, Chief Front End Executive, to research and develop a customer profiling algorithm.</li>
                        <li>Created a white paper with all my findings and workings of an algorithm to categorize customers based on past shopper experiences. </li>
                        <li>Had the great opportunity to learn and understand how customer profiling worked and get an in depth experience of how an E-commerce operated. </li>
                        <li>Following year was invited to continue working on my algorithm.</li>
                        <li>Became a python and machine learning intern where I developed a simple software to accomplish small tasks of my papers algorithms with ML instead of general statistics. Hence we were able to detect in prior certain customer behaviours. </li>
                        <li>The paper is belonging to the firm as it contains crucial private information and hence cannot be displayed publicly</li>
                        {/* <li>research</li> */}

                    </ul>

                </div>
                
            </div>

        </div>
    )

}



function PostsForAbout(){
    // const [view,setView]=useState(false)
    return(
        <div className="PostsForAbout">
            <h1>Experience</h1>
            <RochesterInstituteTech/>
            <AvenueEcommerceLimited/>
            {/* <h1>Projects</h1> */}
            {/* <Poke2/> */}

        </div>
    )
    
}


export default PostsForAbout