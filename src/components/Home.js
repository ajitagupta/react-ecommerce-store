import React from 'react';
import Cartform from './Cartform';
import DisplayShoe from '../images/img-1.png';
import './About.css';

const Home = () => {
  return (
    <>
      <div className="about-container">
        <div className="about-content">
          <h1>About MyStore</h1>
          <p>
            Welcome to MyStore, your number one source for all things home! We're dedicated to providing you the best home and retail products, with a focus on dependability, customer service, and uniqueness.
            <br /><br />
            Our journey began with a passion for transforming houses into homes, recognizing the impact that quality products can have on everyday life. From kitchen essentials to cozy bedroom decor, our curated selection aims to cater to all your home needs, ensuring comfort, style, and functionality.
            <br /><br />
            At MyStore, we believe that every home has a story, and our mission is to help you tell yours. Whether you're moving into a new space or looking to refresh your current abode, we offer products that blend seamlessly with your lifestyle and preferences. We work tirelessly to bring you the latest trends and timeless pieces that will inspire and delight.
          </p>
          <div className="read_bt"><a href="/#">Read More</a></div>
        </div>
        <div className="about-image">
          <img src={DisplayShoe} alt="shoe" />
        </div>
      </div>

      <Cartform />
    </>
  );
};

export default Home;
