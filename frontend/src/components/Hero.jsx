import React from 'react';

const Hero = ({ title, imageUrl }) => {
    return (
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
            • Compassionate and comprehensive healthcare services. <br />
            • Experienced doctors delivering personalized treatments. <br />
            • Focused on patient comfort, safety, and satisfaction. <br />
            • Equipped with the latest medical technologies. <br />
            • Your health journey starts here with expert guidance.

          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
  );
};

export default Hero;