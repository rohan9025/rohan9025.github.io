import React from 'react'



function RochesterInstituteTech(){
    return(
        <div className="AboutPost">
            {/* <div className="DisplayImg"> */}
               {/* <p>Rochester Instritute of Technology</p>  */}
            {/* </div> */}
            <div className="Content">
                <div className="Header">
                    <div className="Position">Summer Research Program</div> 
                    <div className="Place">Rochester Institute of Technology - NY,USA (Virtual)</div> 
                    <div className="Duration">1 June 2020 - 6 August 2020 </div>                     
                </div>
                <div className="Info">
                    <ul>
                        <li>Worked under the guidance of Prof Jay Yang from Rit to develop research skills in the area of CyberSecurity.</li>
                        <li>I spent time learning and analysing the IDS / network monitoring system, Bro/Zeek. </li>
                        {/* <li>My work included understanding the architecture uses and advantages of Zeek over its substitutes.</li> */}
                        {/* <li>Now unlike other alternatives it has its own scripting language which can be used to deploy scripts to perform any kind of analysis such as feature extraction, custom logging, notice raising, ip flagging, portscan detections etc. It has its own custom datatypes and data structures tailored to network analyses.</li> */}
                        <li>The complete documentation of my experience of working with zeek is given in the below github link. </li>
                        <li>Github Repo : <a href="https://github.com/rohan9025/ZeekDoc" target="_blank">https://github.com/rohan9025/ZeekDoc</a></li>
                        <li>The program included various seminars by experts from RIT and Various Phd Students from around the globe. We discussed topics such as Security in Iot and Health Systems, Deepfakes, Adversarial networks, Security in Software Systems, Security Hazards in System Caches, Social Engineering, Security with Human Interactions and Explainable AI</li>
                        <li>I had a great time in the cultural exchange meets with people from places such as Netherland, Poland, Taiwan, England, USA and India. We discussed food, movies, pandemic scenarios, personal interests and so on.</li>
                        <li>Was awarded a 1500 USD scholarship on admission to the program</li>
                        <li>Link to the program website : <a href="https://www.rit.edu/cybersecurity/cybervsr">https://www.rit.edu/cybersecurity/cybervsr</a></li>

                    </ul>

                </div>
                
            </div>

        </div>
    )

}

export default RochesterInstituteTech
