import React from 'react'
import { Link } from 'react-router-dom';
import {BsFacebook,BsInstagram,BsLinkedin,BsGithub} from 'react-icons/bs';
const Footer = () => {
  return (
    <>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-5'>
              <div className='footer-top-data d-flex gap-30 align-items-center'>
                <img src='images/newsletter.png' alt='newsletter'/>
                 <h3 className='mb-0 text-white'> Sign Up For Newsletter</h3>
              </div>
            </div>
            <div className='col-7'>
                 <div className='input-group'>
                  <input
                  type="text"
                  className='form-control py-1' 
                  placeholder='Your Email'
                  aria-label='Your Email'
                  aria-describedby='basic-addon2'/>
                  <span className='input-group-text p-2' id='basic-addon2'>
                    Subscribe
                  </span>

                 </div>
                </div>
          </div>
        </div>
      </footer>
      
      <footer className='py-4'>
         <div className='container-xxl'>
          <div className='row'>
              <div className='col-4'>
                <h4 className='text-white py-2 mb-1'>Contact Us</h4>
                <address className='text-white fs-6 '>
                 H# 2/3 F# 5B , Block-A , Lalmatia , <br /> Near Aarong Building ,<br />
                 Dhaka-1207 , Dhaka , Bangladesh
                </address>
                <a href='tel:01711111111 , 018000000000' 
                className='mt-3 d-block mb-1 text-white'>
                  01711111111 , 018000000000
                </a>
                <a href='mailto:rahatrayhansheikh@gmail.com' 
                className='mt-2 d-block mb-0 text-white'>
                  rahatrayhansheikh@gmail.com
                </a>
                <div className='social_icons d-flex align-items-center gap-30'>
                  <a className="text-white"href='#'>
                     <BsFacebook fs-4/>
                  </a>
                  <a className="text-white"href='#'>
                    <BsInstagram fs-4/>
                  </a>
                  <a className="text-white"href='#'>
                    <BsGithub fs-4/>
                  </a>
                  <a className="text-white"href='#'>
                    <BsLinkedin fs-4/>
                  </a>
                </div>
              </div>


              <div className='col-3'>
              <h4 className='text-white py-2 mb-1'>information</h4>
              <div className='footer-links d-flex flex-column'>
              <Link className='text-white py-2 mb-1'>Privacy Policy</Link>
              <Link className='text-white py-2 mb-1'>Refund Policy</Link>
              <Link className='text-white py-2 mb-1'>Shipping Policy</Link>
              <Link className='text-white py-2 mb-1'>Terms & Condition</Link>
              <Link className='text-white py-2 mb-1'>Blogs</Link>
              </div>
              </div>
              <div className='col-3'>
              <h4 className='text-white py-2 mb-1'>Account</h4>
              <div className='footer-links d-flex flex-column'>
              <Link className='text-white py-2 mb-1'>Search</Link>
              <Link className='text-white py-2 mb-1'>About Us</Link>
              <Link className='text-white py-2 mb-1'>FaQ</Link>
              <Link className='text-white py-2 mb-1'>Contact</Link>
              <Link className='text-white py-2 mb-1'>Size Chart</Link>
              </div>
              </div>
              <div className='col-2'>
              <h4 className='text-white py-2 mb-1'>Quick Links</h4>
              <div className='footer-links d-flex flex-column'>
              <Link className='text-white py-2 mb-1'>Accessories</Link>
              <Link className='text-white py-2 mb-1'>Laptop</Link>
              <Link className='text-white py-2 mb-1'>Headphones</Link>
              <Link className='text-white py-2 mb-1'>Tablets</Link>
              <Link className='text-white py-2 mb-1'>Watch</Link>
              </div>
              </div>
          </div>
         </div>
      </footer>

      <footer className='py-4'>
           <div className='container-xxl'>
            <div className='row'>
              <div className='col-12'>
                <p className='text-center mb-0 text-white'>
                  &copy; {new Date().getFullYear()}; Powered By RS-Rahat BD
                </p>
              </div>
            </div>
           </div>
      </footer>
    </>
  )
}

export default Footer