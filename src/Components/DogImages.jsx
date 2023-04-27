import React from "react";
import Button from "./Button";

const DogImages = (props) => {
  const dogButton = "Get a dog!";
  return (
    <>
      <Button handleClick={props.handleClick} buttonName={dogButton} />

      {props.dogImages?.map((url, index) => (
        <div key={index} className="dog">
          <img src={url} alt="Dog" />
        </div>
      ))}
    </>
  );
};

export default DogImages;
