import React from 'react'
import ReactStars from "react-rating-stars-component";
import {Link} from "react-router-dom";
const SpeacialProduct = () => {
  return (
    <div className='col-4'>
        <div className='speacial-product-cart'>
            <div className='d-flex justify-content-between'>
                <div>
                    <img src='images/speaker.jpg' className='img-fluid' alt='speaker'/>
                </div>
                <div className='speacial-product-conent'>
                    <h5 className='brand'>Sony</h5>
                    <h6 className='title'>Sony A1 Bluetooth Speakers</h6>
                    <ReactStars
                    count={5}
                    size={24}
                    value={4}
                    activeColor="#ffd700"
                />
                  <p className='price'>
                    <span className='red-p'>$150</span> &nbsp; <strike>$200</strike>
                  </p>
                  <div className='discount-till d-flex align-items-center gap-10'>
                    <p className='mb-0'>
                        <b>7</b> Day's 
                    </p>
                    <div className='d-flex gap-10 align-items-center'>
                        <span className='badge rounded-circle p-3 bg-danger'>35hr</span>:
                        <span className='badge rounded-circle p-3 bg-danger'>52m</span>:
                        <span className='badge rounded-circle p-3 bg-danger'>15s</span>
                    </div>  
                  </div>
                  <div className='prod-count my-3'>
                        <p>Products:5</p>
                        <div className="progress">
                        <div className="progress-bar" 
                        role="progressbar" 
                        style={{width: "25%"}}
                        aria-valuenow="25" 
                        aria-valuemin="0" 
                        aria-valuemax="100">
                        </div>
                       </div>
                    </div>
                    <Link className='button'>Add To Cart</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SpeacialProduct