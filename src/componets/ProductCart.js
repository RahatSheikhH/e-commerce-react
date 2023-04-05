import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
const ProductCart = (props) => {
  const { grid } = props;
  let location = useLocation();
  

  return (
    <>
      <div className='col-3'>
        <div className='product-cart position-relative'>
          <div className='wishlist-icon position-absolute'>
            <Link><img src='images/wish.svg' alt='wishlist'/></Link>
          </div>
            <div className='product-image'>
                <img src="images/watch.jpg" className='img-fluid'alt="featured product"/>
                <img src="images/a watch.png"className='img-fluid' alt='freatured product'/>
            </div>
            <div className='prodct-details'>
             <h6 className='brand'> Watches </h6>
             <h5 className='product-title'>The Best Products</h5>
           <ReactStars
                    count={5}
                    size={24}
                    value={4}
                    activeColor="#ffd700"
                />
             <p className='price'>$99.00</p>
            </div>
            <div className='action-bar position-absolute'>
              <div className='d-flex flex-column gap-15'>
                <Link><img src="images/prodcompare.svg" alt="compare"/></Link>
                <Link><img src="images/view.svg" alt="view"/></Link>
                <Link><img src="images/add-cart.svg" alt="addcart"/></Link>
              </div>
            </div>
        </div>
    </div>
    <div className='col-3'>
        <div className='product-cart position-relative'>
          <div className='wishlist-icon position-absolute'>
            <Link><img src='images/wish.svg' alt='wishlist'/></Link>
          </div>
            <div className='product-image'>
                <img src="images/watch.jpg" className='img-fluid'alt="featured product"/>
                <img src="images/a watch.png"className='img-fluid' alt='freatured product'/>
            </div>
            <div className='prodct-details'>
             <h6 className='brand'> Watches </h6>
             <h5 className='product-title'>The Best Products</h5>
           <ReactStars
                    count={5}
                    size={24}
                    value={4}
                    activeColor="#ffd700"
                />
             <p className='price'>$99.00</p>
            </div>
            <div className='action-bar position-absolute'>
              <div className='d-flex flex-column gap-15'>
                <Link><img src="images/prodcompare.svg" alt="compare"/></Link>
                <Link><img src="images/view.svg" alt="view"/></Link>
                <Link><img src="images/add-cart.svg" alt="addcart"/></Link>
              </div>
            </div>
        </div>
    </div>
    </>
  
  )
}

export default ProductCart