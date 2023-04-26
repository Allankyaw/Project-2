import React from "react";
import { useState } from "react";
import DogImages from "./Components/DogImages";
import CatImages from "./Components/CatImages";

function App() {
  const [dogImages, setDogImages] = useState([]);
  const [catImages, setCatImages] = useState([]);

  const handleDogClick = async () => {
    const res = await fetch("https://dog.ceo/api/breeds/image/random/3");
    if (res.status === 200) {
      const dogData = await res.json();
      setDogImages(dogData.message.map((element) => element));
    } else {
      alert(`Something went wrong: ${res.status} code returned`);
    }
  };

  const handleCatClick = async () => {
    const res = await fetch(
      "https://api.thecatapi.com/v1/images/search?limit=10"
    );
    if (res.status === 200) {
      const catData = await res.json();
      setCatImages(catData.map((element) => element.url));
    } else {
      alert(`Something went wrong: ${res.status} code returned`);
    }
  };

  return (
    <>
      <div>
        <DogImages dogImages={dogImages} handleClick={handleDogClick} />
      </div>

      <div>
        <CatImages catImages={catImages} handleClick={handleCatClick} />
      </div>
    </>
  );
}

export default App;
