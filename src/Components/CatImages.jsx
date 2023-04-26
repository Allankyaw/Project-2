import React from "react";
import Button from "./Button";

const CatImages = (props) => {
  const catButton = "Get a cat!";
  return (
    <>
      <Button handleClick={props.handleClick} buttonName={catButton} />

      {props.catImages.map((url, index) => (
        <div key={index} className="cat">
          <img src={url} alt="Cat" />
        </div>
      ))}
    </>
  );
};

export default CatImages;
