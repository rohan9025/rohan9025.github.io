import Modal from 'react-modal';
import Poke2 from '../posts/P2'
import React,{ useState } from 'react'
import './modalexperience.css'

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
  function Poke2tab(props)
  {
      return(
          <button className="Tab" onClick={props.onClick}>
                <div className="HeaderTab" style={{"backgroundColor":"orange"}}>
                    <div className="Position">Poke2</div>
                </div>
                <div className="InfoTab">
                    <div className="Place">Microservices/CI-CD/MERN stack</div> 
                    <div className="Duration">1 May 2020 - 1 June 2020</div>
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
            {props.number==='POKE2' && <Poke2tab onClick={openModal}/>}
            {/* {props.number=='AEC' && <AECtab onClick={openModal}/>} */}
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
            <button className="ModalClose" onClick={closeModal}>X</button>
            {/* {props.number=='RIT' && <RochesterInstituteTech/>} */}
            {/* {props.number=='AEC' && <AvenueEcommerceLimited/>} */}
            {props.number==='POKE2' && <Poke2/>}


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

  function ModalProject()
  {
    return (
        <div className="Cards">
            {/* <ModalPost number='RIT' /> */}
            {/* <ModalPost number='AEC' /> */}
            <ModalPost number='POKE2' />

            {/* <ModalPostAgg/> */}
            {/* <ModalPostAgg/> */}

        </div>
    )
  }

  export default ModalProject
   