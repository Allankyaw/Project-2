import React from "react";
import Button from "./Button";

const DogImages = (props) => {
  const handleClick = (limit) => () => {
    props.handleClick(limit);
  };

  return (
    <>
      <Button handleClick={handleClick(1)} buttonName="get a dog!" />
      <Button handleClick={handleClick(2)} buttonName="get 2 dogs!" />
      <Button handleClick={handleClick(3)} buttonName="get 3 dogs!" />

      {props.dogImages?.map((url, index) => (
        <div key={index} className="dog">
          <img src={url} alt="Dog" />
        </div>
      ))}
    </>
  );
};

export default DogImages;
