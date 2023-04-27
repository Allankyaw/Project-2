import React from "react";
import Button from "./Button";

const CatImages = (props) => {
  const handleClick = (limit) => () => {
    props.handleClick(limit);
  };

  return (
    <>
      <Button handleClick={handleClick(1)} buttonName="get a cat!" />
      {/* <Button handleClick={handleClick(2)} buttonName="get 3 cat!" /> */}
      {/* api only allows return of 1 or 10 */}
      <Button handleClick={handleClick(10)} buttonName="get 10 cat!" />

      {props.catImages.map((url, index) => (
        <div key={index} className="cat">
          <img src={url} alt="Cat" />
        </div>
      ))}
    </>
  );
};

export default CatImages;
