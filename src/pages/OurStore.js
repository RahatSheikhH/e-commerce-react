import React from 'react'
import BreadCrumb from '../componets/BreadCrumb'
import {Helmet} from "react-helmet";
import ReactStars from "react-rating-stars-component";
import { useState } from 'react';
import ProductCart from "../componets/ProductCart";
const OurStore = () => {
    const [ grid, setGrid ] = useState(4);
    alert (grid);
  return (
    <>
     <Helmet>
           <meta charSet="utf-8" />
            <title>Our Store</title>
    </Helmet>
     <BreadCrumb title='Our Store'/>
     <div className='store-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-3'>
                    <div className='filter-cart mb-3'>
                        <h3 className='filter-title'>
                            Shop By Categories</h3>
                            <div>
                                <ul className='ps-0'>
                                    <li>Laptop</li>
                                    <li>Smart Phone</li>
                                    <li>Camera</li>
                                    <li>Tv</li>
                                    <li>Watch</li>
                                </ul>
                            </div>
                        </div>
                    <div className='filter-cart mb-3'>
                        <h3 className='filter-title'>
                            Filter By</h3>
                            <div>
                                <h5 className='sub-title'>Available Products</h5>
                                <div>
                                <div className='form-check'>
                                    <input className='form-check-box' type='checkbox' value='' id='' />
                                    <label className='form-check-label' htmlFor=''> In Stock (1) </label>
                                </div>
                                <div className='form-check'>
                                    <input className='form-check-box' type='checkbox' value='' id=''  />
                                    <label className='form-check-label' htmlFor=''> Out of Stock (0) </label>
                                </div>
                                </div>
                            </div>
                            <div>
                                <h5 className='sub-title'>Price</h5>
                               <div className='d-flex align-items-center gap-10'>
                               <div className="form-floating">
                                <input type="email" className="form-control" id="floatingInput" placeholder="From" />
                                <label htmlFor="floatingInput">From</label>
                                 </div>
                                 <div className="form-floating">
                                <input type="email" className="form-control" id="floatingInput1" placeholder="To" />
                                <label htmlFor="floatingInput1">To</label>
                                 </div>
                               </div>
                               <h5 className='sub-title'>Colors</h5>
                               <div>
                                <ul className='colors'>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                               </div>
                               <h5 className='sub-title'>Size</h5>
                               <div>
                               <div className='form-check'>
                                    <input className='form-check-box' type='checkbox' value='' id='color-1' />
                                    <label className='form-check-label' htmlFor='color-1'> S (1) </label>
                                </div>
                                <div className='form-check'>
                                    <input className='form-check-box' type='checkbox' value='' id='color-2' />
                                    <label className='form-check-label' htmlFor='color-2'> M (1) </label>
                                </div>
                                <div className='form-check'>
                                    <input className='form-check-box' type='checkbox' value='' id='color-3' />
                                    <label className='form-check-label' htmlFor='color-3'> L (1) </label>
                                </div>
                                <div className='form-check'>
                                    <input className='form-check-box' type='checkbox' value='' id='color-4' />
                                    <label className='form-check-label' htmlFor='color-4'> XL(3) </label>
                                </div>
                                <div className='form-check'>
                                    <input className='form-check-box' type='checkbox' value='' id='color-%' />
                                    <label className='form-check-label' htmlFor='color-%'> XXL(1) </label>
                                </div>
                               </div>
                            </div>
                        </div>
                    <div className='filter-cart mb-3'>
                        <h3 className='filter-title'>
                            Product Tags</h3>
                            <div>
                                <div className='product-tags d-flex flex-wrap align-items-center gap-10'>
                                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                     Headphone
                                    </span>
                                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                     Laptop
                                    </span>
                                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                     Watch
                                    </span>
                                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                    Smart Phone
                                    </span>
                                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                     TV
                                    </span>

                                </div>
                            </div>
                        </div>
                    <div className='filter-cart mb-3'>
                        <h3 className='filter-title'>
                            Random Product </h3>
                            <div>
                                <div className='random-products mb-3 d-flex'>
                                    <div className='w-50'>
                                        <img src="images/watch.jpg" className='img-fluid' alt="watch"/>
                                    </div>
                                    <div className='w-50'>
                                        <h5>
                                            The All New Smart Watch Is Here 
                                        </h5>
                                        <ReactStars
                                        count={5}
                                        size={24}
                                        value={4}
                                        activeColor="#ffd700"
                                          />
                                          <b>$350</b>
                                    </div>
                                </div>
                                <div className='random-products d-flex'>
                                    <div className='w-50'>
                                        <img src="images/headphone.jpg" className='img-fluid' alt="headphone"/>
                                    </div>
                                    <div className='w-50'>
                                        <h5>
                                        With Some New Features 
                                        </h5>
                                        <ReactStars
                                        count={5}
                                        size={24}
                                        value={4}
                                        activeColor="#ffd700"
                                          />
                                          <b>$350</b>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                <div className='col-9'>
                    <div className='filter-sort-grid mb-4'>
                        <div className='d-flex justify-content-between align-items-center'>
                        <div className='d-flex align-items-center gap-10'>
                            <p className='mb-0 d-block' style={{width:"100px"}}>Sort By:</p>
                            <select name="" className='form-control form-select' id="">
                                <option value="manual">Featured</option>
                                <option value="best-selling" selected="selected">Best Selling</option>
                                <option value="title-ascending">A-Z</option>
                                <option value="title-descending">Z-A</option>
                                <option value="price-ascending">Low To High</option>
                                <option value="price-descending">High To Low</option>
                                <option value="created-ascending">Old To New</option>
                                <option value="created-descending">New To Old</option>
                            </select>
                        </div>
                        <div className='d-flex align-items-center gap-10'>
                            <p className='totalproducts mb-0'>30 Products</p>
                            <div className='d-flex gap-10 align-items-center grid'>
                                <img onClick={() => {
                                    setGrid(4);
                                }} 
                                 src="images/gr4.svg" className="d-block img-fluid" alt="grid" />
                                <img onClick={() => {
                                    setGrid(3);
                                }} 
                                 src="images/gr3.svg" className="d-block img-fluid" alt="grid" />
                                <img onClick={() => {
                                    setGrid(2);
                                }} 
                                 src="images/gr2.svg" className="d-block img-fluid" alt="grid" />
                                <img onClick={() => {
                                    setGrid(1);
                                }} 
                                 src="images/gr.svg"  className="d-block img-fluid" alt="grid" />
                            </div>
                        </div>
                        
                        </div>
                    </div>
                    <div className='products-list pb-5'>
                       <ProductCart grid= {grid} />
                    </div>
                </div>
            </div>
        </div>
     </div>
    
    </>
  )
}

export default OurStore