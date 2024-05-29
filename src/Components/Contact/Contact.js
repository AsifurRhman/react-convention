import { faArrowUp, faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';

import Leaflet from '../Leaflet/Leaflet.js';
import './Contact.css'


const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  useEffect(() => {
    var alert_del = document.querySelectorAll('.alert-del');
    alert_del.forEach((x) =>
      x.addEventListener('click', function () {
        x.parentElement.classList.add('hidden');
      })
    );
}, [])
  return (
    <div className="contact">
      <div className="contact-head text-center text-6xl text-gray-400">
        <h1>Contact Address</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="mt-10 mx-auto">
          <h5 className='text-2xl '>
            <FontAwesomeIcon className="" icon={faLocationDot} />
            <span style={{marginLeft:'10px'}}>Patiya,Chittagong</span>
          </h5>
          <h5 className="mt-5 text-2xl">
            <FontAwesomeIcon className="" icon={faEnvelope} />
            <span style={{marginLeft:'10px'}}>Official: Royal@gmail.com</span>   
            <a href="#"></a>
          </h5>
          <h5 className="mt-5 text-2xl">
            <FontAwesomeIcon className="" icon={faPhone} />
            <span style={{marginLeft:'10px'}}>Helpline :
          +8801858555888,+8801798406245</span>    
          </h5>
        </div>
        <Leaflet style={{ marginLeft: "20%" }}></Leaflet>
      </div>
      {/* <div className="  mt-10 mb-10 text-right mr-10">
            <button><a href="#"> <FontAwesomeIcon
               style={{borderRadius:"10px"}}
                className='text-6xl bg-cyan-900 text-white p-5 ' icon={faArrowUp} /></a></button>
           </div> */}
      {/* <Arrow /> */}
     {/* <Chat/> */}

           {/* toast start */}
           {/* <div className='ml-auto mb-5'>
            <div
                className="bg-red-900  w-72 mt-10 flex justify-between text-white shadow-xl rounded p-3 "
            >
                <p className="self-center">
               To need any help,Message us or call us
                </p>
                <strong className="text-2xl mt-2 ml-5 align-center cursor-pointer alert-del"
                >&times;</strong
                >
            </div>
            </div> */}
            
            {/* toast end */}
    </div>
  );
};

export default Contact;