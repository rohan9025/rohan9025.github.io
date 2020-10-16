import Modal from 'react-modal';
import React,{ useState} from 'react'
// import customerProfiling from "../images/customerProfiling.png"
import cross from "../images/cross.png"
import RochesterInstituteTech from '../posts/RIT'
import AvenueEcommerceLimited from '../posts/AEC'
// import Poke2 from '../posts/P2'

import './modalexperience.css'


// Modal.defaultStyles.overlay.backgroundColor = 'transparent';
// Modal.defaultStyles.overlay.style={
//   backgroundColor:'transparent',
// }


// Modal.defaultStyles.overlay.backgroundBlendMode= 
const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        backgroundColor :"transparent",
        width:"100%",
        border:"0px",

        // opacity:'1.8',
      
    },
    overlay:{
      // backgroundColor:"white",
      // opacity:0.8,
      // backgroundBlendMode:"hardlight"
      background: 'rgba(0, 0, 0, 0.8)',
    }
    
  };

  function RITtab(props)
  {
      return(
          <button className="Tab" onClick={props.onClick}>
                <div className="HeaderTab" style={{"backgroundColor":"tomato"}}>
                    <div className="Position">Rochester Institute of Technology</div>
                </div>
                <div className="InfoTab">
                    <div className="Position">Summer Research Program (CyberVsr)</div>
                    <div className="Place">NY,USA (Virtual)</div> 
                    <div className="Duration">1 June 2020 - 6 August 2020 </div>
                </div>
                
                
                                         
          </button>
      )
  }
  function AECtab(props)
  {
      return(
          <button className="Tab" onClick={props.onClick}>
                <div className="HeaderTab" style={{"backgroundColor":"teal"}}>
                    <div className="Position">Avenue E-Commerce Ltd </div>
                </div>
                
                <div className="InfoTab">
                    <div className="Position">Summer Research Intern</div>
                    <div className="Place">Mumbai,India</div> 
                    <div className="Duration">May 2018 - July 2018 & July 2019 </div>
                    <div className="Topic">Machine learning for customer profiling. White Paper on market analysis for an E-commerce.</div>                     
                </div>
          </button>
      )
  }


function ModalPost(props){
    
    // var subtitle;
    const [modalIsOpen,setIsOpen] = useState(false);
    function openModal() {
      setIsOpen(true);
    }
   
    function afterOpenModal() {
    //   // references are now sync'd and can be accessed.
    //   subtitle.style.color = '#f00';
    }
   
    function closeModal(){
      setIsOpen(false);
    }
   
      return (
        <div>
          {/* <button onClick={openModal}>Open Modal</button> */}
          <div >
            {props.number==='RIT' && <RITtab onClick={openModal}/>}
            {props.number==='AEC' && <AECtab onClick={openModal}/>}
          </div>
          

          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            // className="ModalClass"
          >
   
            {/* <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2> */}
            <button className="ModalClose" onClick={closeModal}>{cross}</button>
            {props.number==='RIT' && <RochesterInstituteTech/>}
            {props.number==='AEC' && <AvenueEcommerceLimited/>}
            {/* {props.number=='Poke' && <Poke2/>} */}


            {props.component}
            {/* <div>I am a modal</div> */}
            {/* <form>
              <input />
              <button>tab navigation</button>
              <button>stays</button>
              <button>inside</button>
              <button>the modal</button>
            </form> */}
          </Modal>
        </div>
      );
  }

  function ModalExp()
  {
    return (
        <div className="Cards">
            <ModalPost number='RIT' />
            <ModalPost number='AEC' />
            <ModalPost number='Poke' />

            {/* <ModalPostAgg/> */}
            {/* <ModalPostAgg/> */}

        </div>
    )
  }

  export default ModalExp
   