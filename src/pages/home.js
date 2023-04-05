import React from 'react'
import {Link} from 'react-router-dom';
import Marquee from "react-fast-marquee";
import BlogPart from '../componets/BlogPart';
import ProductCart from '../componets/ProductCart';
import SpeacialProduct from '../componets/SpeacialProduct';
const Home = () => {
  return (
    <>
    {/* home-1 start */}
    <section className='home-wrapper-1 py-5'>
     <div className="container-xxl">
       <div className="row">
        <div className="col-6">
          <div className="main-banner position-relative p-3">
            <img 
            src="images/main-banner-1.jpg"
            className="img-fluid ronded-3"
            alt="main banner"
            />
            <div className="main-banner-content position-absolute">
              <h4>FOR NEW GENERATION</h4>
              <h5>iPad S13 Pro</h5>
              <p>Start's From $999</p>
              <Link className="button">BUY NOW</Link>
            </div>
          </div>
        </div>
        <div className='col-6'>
          <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
          <div className="small-banner position-relative p-3">
            <img 
            src="images/catbanner-01.jpg"
            className="img-fluid ronded-3"
            alt="main banner"
            />
            <div className="small-banner-content position-absolute">
              <h4>BEST SALE</h4>
              <h5>iPad S13 Pro</h5>
              <p>Start's From $999</p> 
            </div>
          </div>
          </div>
          <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
          <div className="small-banner position-relative p-3">
            <img 
            src="images/catbanner-02.jpg"
            className="img-fluid ronded-3"
            alt="main banner"
            />
            <div className="small-banner-content position-absolute">
              <h4>!! 15% Sale !!</h4>
              <h5>Smart Watch</h5>
              <p>Shop The Latest Band & <br />Style Your Colors</p> 
            </div>
          </div>
          </div>
          
        </div>
       </div>
     </div>
   
    </section>
    {/* home-1 end */}
    {/* home-2 start */}
    <section className='home-wrapper-2 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <div className='services d-flex align-items-center justify-content-between'>
              <div className="d-flex align-items-center gap-15 ">
                <img src="images/service.png" alt="services"/>
                <div>
                  <h6>Free Shipping</h6>
                  <p>From all orders over $100</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-15 ">
                <img src="images/service-02.png" alt="services"/>
                <div>
                  <h6>Daily Surprise Offers</h6>
                  <p className='mb-0'>Save up-to 25% off</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-15 ">
                <img src="images/service-03.png" alt="services"/>
                <div>
                  <h6>Support 24/7</h6>
                  <p className='mb-0'>Shop with an expert</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-15 ">
                <img src="images/service-04.png" alt="services"/>
                <div>
                  <h6>Affordable Prices</h6>
                  <p className='mb-0'>Get Factory Direct Price</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-15 ">
                <img src="images/service-05.png" alt="services"/>
                <div>
                  <h6>Secure Payments</h6>
                  <p >100% Protected Payments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
     {/* home -2  end */}
     {/* categories start */}
     <section className='home-wrapper-2 py-5'>
       <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <div className='categories d-flex justify-content-between flex-wrap align-items-center'>
              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera"/>
              </div>
              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Smart TV</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/tv.jpg" alt="tv"/>
              </div>
              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Gaming & Music</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/headphone.jpg" alt="headphone"/>
              </div>
              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Laptop</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/laptop.jpg" alt="laptop"/>
              </div>
              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera"/>
              </div>
              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Smart TV</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/tv.jpg" alt="tv"/>
              </div>
              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Gaming & Music</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/headphone.jpg" alt="headphone"/>
              </div>
              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Laptop</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/laptop.jpg" alt="laptop"/>
              </div>
            </div>
          </div>
        </div>
       </div>
     </section>
     {/* categories end */}
       {/* Featured Cart Start */}
       <section className='featured-wrapper py-5 home-wrapper-2'>
      <div className='container-xxl'>
      <div className='row'>
        <div className='col-12'>
         <div className='section-heading'>Featured Products</div>
        </div>
       <ProductCart />
       <ProductCart />
       <ProductCart />
       <ProductCart />
      </div>
      </div>
     </section>
     {/* Featured Cart End */}
     {/* Famous Featured Product Start*/}
     <section className='famous-wrapper py-5 home-wrapper-2'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-3'>
            <div className='famous-cart position-relative'>
              <img src="images/famous-1.jpg" className='img-fluid' height="500px" width="390px" alt="famous"  />
              <div className='famous-content position-absolute'>
              <h5>BIG SCREEN</h5>
              <h6>Smart Watch Series-7</h6>
              <p><b>Start's From $599 </b></p>
              </div>
            </div>
          </div> 
          <div className='col-3'>
            <div className='famous-cart position-relative'>
              <img src="images/famous-2.jpg" className='img-fluid' height="300px" width="390px" alt="famous"  />
              <div className='famous-content position-absolute'>
              <h5><b>HOT Sale</b></h5>
              <h6>Apple Iphone 14 pro Max</h6>
              <p className='text-white'> <b>Start's From $1599</b></p>
              </div>
            </div>
          </div> 
          <div className='col-3'>
            <div className='famous-cart position-relative'>
              <img src="images/famous-3.jpg" className='img-fluid' height="300px" width="390px" alt="famous"  />
              <div className='famous-content position-absolute'>
              <h5>ALL NEW</h5>
              <h6 className='text-white'>Apple MacBook Air</h6>
              <p className='text-dark'><b>Start's From $1099</b> </p>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className='famous-cart position-relative'>
              <img src="images/famous-4.jpg" className='img-fluid' height="300px" width="390px" alt="famous"  />
              <div className='famous-content position-absolute'>
              <h5>JBL </h5>
              <h6 className='text-dark'>JBL Portable Speaker</h6>
              <p><b>Start's From $599</b></p>
              </div>
            </div>
          </div>  
          
        </div>
      </div> 
     </section>
     {/* Famous Featured Product End*/}
     {/* Speacial Cart Start */}
     <section className='speacial-wrapper py-5 home-wrapper-2'> 
     <div className='container-xxl'>
      <div className='row'>
        <div className='col-12'>
          <h3 className='section-heading'>Speacial Products</h3>
        </div>
      </div>
      <div className='row'>
        <SpeacialProduct />
        <SpeacialProduct />
        <SpeacialProduct />

      </div>
     </div>
     </section>
     {/* Speacial Cart End */}
     {/* Popular Product Part Start */}
     <section className='popular-wrapper py-5 home-wrapper-2'>
      <div className='container-xxl'>
      <div className='row'>
        <div className='col-12'>
         <div className='section-heading'>Our Most Popular Products</div>
        </div>
      </div>
      <div className='row'>
       <ProductCart />
       <ProductCart />
       <ProductCart />
       <ProductCart />
      </div>

      </div>
     </section>
     {/* Popular Product Part End */}
     {/* Marquee Start */}
     <section className='marque-wrapper py-5'>
      <div className='container-xxl'>
       <div className='row'>
        <div className='col-12'>
         <div className='marquee-inner-wrapper card-wrapper'>
          <Marquee>
                 <div className='mx-4 w-25'><img src='images/brand-01.png' alt='brand'/></div>
                 <div className='mx-4 w-25'><img src='images/brand-02.png' alt='brand'/></div>
                 <div className='mx-4 w-25'><img src='images/brand-03.png' alt='brand'/></div>
                 <div className='mx-4 w-25'><img src='images/brand-04.png' alt='brand'/></div>
                 <div className='mx-4 w-25'><img src='images/brand-05.png' alt='brand'/></div>
                 <div className='mx-4 w-25'><img src='images/brand-06.png' alt='brand'/></div>
                 <div className='mx-4 w-25'><img src='images/brand-07.png' alt='brand'/></div>
                 <div className='mx-4 w-25'><img src='images/brand-08.png' alt='brand'/></div>
           </Marquee>
         </div>
        </div>
       </div>
      </div>
     </section>
     {/* Marquee End */} 
     {/* Blog section start */}
     <section className='blog-wrapper py-5 home-wrapper py-5'>
      <div className='container-xxl'>
      <div className='row'>
        <div className='col-12'>
         <div className='section-heading'>Our Latest Blogs</div>
        </div>
       <BlogPart />
       <BlogPart />
       <BlogPart />
       <BlogPart />
      </div>
      </div>
     </section>
     {/* Blog section  end*/}
    </>
  )
}

export default Home;