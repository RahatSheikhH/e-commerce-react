import React from 'react' ;
import { Link } from "react-router-dom";
const BlogPart = () => {
  return (
    <div className='col-3'>
        <div className='blog-part'>
            <div className='part-image'>
                <img  src="images/blog-1.jpg" className='img-fluid' alt="blog"/>
                  <div className='blog-content'>
                    <p className='date'>27 March 2023</p>
                    <h5 className='title'> A Beautiful Morning Renaissance</h5>
                    <p className='desc'>Every day is a good day. There is something to learn, care and celebrate.” “Any day above ground is a good day</p>
                    <Link to="/" className="button">Read More</Link>
                  </div>
            </div>
        </div>
    </div>
  )
}

export default BlogPart