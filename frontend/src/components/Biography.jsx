import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
            Established in 1980, City Hospital delivers modern, compassionate healthcare with a commitment to excellence. Located in the heart of the city, we offer expert treatment using advanced medical technology.
          </p>
          <p>
            Our patient-first approach ensures comfort, care, and continuous support throughout your health journey.
          </p>
          <p>
            "We ensure quality care that's accessible, affordable, and personal."
          </p>
          <p>
            • Book appointments easily online. <br />
            • Access health records anytime. <br />
            • Expert departments: Cardiology, Pediatrics, Surgery & more. <br />
            • 24/7 emergency services. <br />
            • Friendly staff and healing environment.
          </p>
          <p>
            City Hospital is where healing begins and hope is restored.
          </p>
        </div>
      </div>
    </>
  );
};

export default Biography;
