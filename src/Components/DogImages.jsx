import React from "react";

const DogImages = (props) => {
  return (
    <>
      {props.dogImages.map((url, index) => (
        <div key={index} className="dog">
          <img src={url} alt="Dog" />
        </div>
      ))}
    </>
  );
};

export default DogImages;
