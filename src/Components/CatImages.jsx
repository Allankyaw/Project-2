import React from "react";

const CatImages = (props) => {
  return (
    <>
      {props.catImages.map((url, index) => (
        <div key={index} className="dog">
          <img src={url} alt="Dog" />
        </div>
      ))}
    </>
  );
};

export default CatImages;
