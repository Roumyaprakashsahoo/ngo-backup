import React from 'react';
import './AboutUs.css';
import Navbar from '../navbar';
import logo from './logo.png'; // Replace with an appropriate image

const AboutUs = () => {
  return (
    <>
    <Navbar />
    <div className="aboutus-container">
      <div className="aboutus-card">
        <h2 className="aboutus-header">About Us</h2>
        <div className="aboutus-content">
          <div className="aboutus-text">
            <p>
              Welcome to our NGO! We are dedicated to making a positive impact in the community by organizing volunteer events and supporting various causes. Our mission is to create a common platform where everyone can contribute their time and skills to make a difference. Join us in our journey to bring about meaningful change.
            </p>
          </div>
          <div className="aboutus-image-container">
            <img src={logo} alt="NGO" className="aboutus-image" />
          </div>
        </div>
      </div>
    </div>
    </>
    
    
  );
};

export default AboutUs;
