import React from 'react'
import Cartform from './Cartform'
import DisplayShoe from '../images/img-1.png'
import './About.css'

const Home = () => {
  return (
    <>
      
      <div className={["about_section", "layout_padding"]}>
         <div className="container">
            <div className="row">
               <div className={["col-md-6", "content-column"]}>
                  <h1 className="about_taital">About MyStore</h1>
                  <p className="about_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                  <div className="read_bt"><a href="/#">Read More</a></div>
               </div>
               <div className={["col-md-6", "image-column"]}>
                  <div className="image_1"><img src={DisplayShoe} alt="shoe" />
                  </div>
               </div>
            </div>
         </div>
      </div>


      <Cartform/>
    </>
  )
}

export default Home