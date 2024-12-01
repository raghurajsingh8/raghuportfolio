import React from 'react';
import experience from "./Data/experience.json";

const Experiance = () => {
  return (
    <div className="containerexp"  id="containerexp">
      <h1>EXPERIENCE</h1>

      {experience.map((data) => {
        // Determine the width for the logo based on the id
        const logoWidth = data.id === 2 ? '180px' : '80px'; // Default width for other logos

        return (
          <div key={data.id} className='ex-items'>
            <div className="left">
              <img src={`/assets/${data.imageSrc}`} alt={data.organisation} height="80px" width={logoWidth} />
            </div>
            <div className="right">
              <h2>{data.role}</h2>
              <h4>{data.startDate}{"    "}{data.endDate}{" "}{data.location}</h4>
              <h5>{data.experiences[0]}</h5>
              <h5>{data.experiences[1]}</h5>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Experiance;
