
import React from 'react'
// import customerProfiling from "../images/customerProfiling.png"



function Poke2(){
    return(
        <div className="AboutPost">
            {/* <div className="DisplayImg" 
            // style={{"backgroundImage":`url(https://cdn-images-1.medium.com/max/1600/1*2bPC6K2c4oJHp00IJxbskA.jpeg)`}}>
            // style={{"backgroundImage":`url(https://byrony.github.io/figure/customer_segment.jpg)`}}>
            style={{"backgroundImage":`url(${customerProfiling})`,"height":"110px"}}>

               {/* <p>Rochester Instritute of Technology</p>  */}
            {/* </div>  */}
            <div className="Content">
                <div className="Header" style={{"backgroundColor":"orange"}}>
                    <div className="Position">Poke2</div> 
                    <div className="Place">ReactJS, NodeJs,Mongo Atlas, Gitlab CI/CD, Heroku PaaS</div> 
                    <div className="Duration">May 2018 - July 2018 & July 2019 </div>                     
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

export default Poke2
