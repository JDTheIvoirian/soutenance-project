import React from "react";
import '../influence/influence.css';

const Influence = ({ influencers }) => {
    return (
        <div className="influence">
          {influencers.map((imgSrc, index) => (
            <img key={index} src={imgSrc} alt="influence" />
          ))}
        </div>
    );
}

export default Influence;