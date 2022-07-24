import React from 'react';
import { AiFillFacebook,AiFillTwitterCircle,AiFillYoutube,AiFillLinkedin,AiFillInstagram,AiFillPhone,AiOutlineMobile,AiFillMail } from "react-icons/ai";
import payment from '../../resource/payment/American-Express.png'
import payment2 from '../../resource/payment/Maestro.png'
import payment3 from '../../resource/payment/PayPal.png'
import payment4 from '../../resource/payment/Visa-Electron.png'
import payment5 from '../../resource/payment/Visa.png'
import './Footer.css'
const Footer = () => {
  return (
    <footer className='footer-section'>
      <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>
        <div className='footer-contact'>
        <div className="logo">
          <h2>
            <span>F</span>ood
            <span>C</span>ode
          </h2>
        </div>
        <div >
          <h3>contact with us</h3>
          <div className='footer-social flex justify-start items-start text-5xl'>
          <p className='facebook'><AiFillFacebook/></p>
          <p className='instagram'><AiFillInstagram/></p>
          <p className='youtube'><AiFillYoutube/></p>
          <p className='linkedin'><AiFillLinkedin/></p>
          <p className='twiter'><AiFillTwitterCircle/></p>
          </div>

        </div>
        </div>
        <div className='footer-touch '>
          <h3>GET IN TOUCH</h3>
          <h4>Food Code, road no: 2, house no: 10, <br /> kanrangirchor, dhaka-1211, bangladesh</h4>
          <div className='flex  text-xl justify-start items-center'>
          <AiFillPhone className='text-red-700 text-3xl mr-4'></AiFillPhone><p>Phone: (+386) 40 123 456</p>
          </div>
          <div className='flex text-xl my-2 justify-start items-center'>
          <AiOutlineMobile className='text-green-700  text-3xl mr-4'></AiOutlineMobile><p>phone: (+880)01871754280</p>
          </div>
         <div className='flex text-xl justify-start items-center'>
         <AiFillMail className='text-red-300 text-3xl mr-4'></AiFillMail><p>mail: alamgir5253@gmail.com</p>
         </div>

        </div>
        <div className='footer-payment'>
          <h3>payment method</h3>
          <div className='grid grid-cols-3'>
            <img src={payment} alt="" />
            <img src={payment2} alt="" />
            <img src={payment3} alt="" />
            <img src={payment4} alt="" />
            <img src={payment5} alt="" />
          </div>


        </div>
       

      </div>
    </footer>
  );
};

export default Footer;