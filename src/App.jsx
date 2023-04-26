import React from "react";
import { useState } from "react";
import DogImages from "./Components/DogImages";
import CatImages from "./Components/CatImages";

function App() {
  const [dogImages, setDogImages] = useState([]);
  const [catImages, setCatImages] = useState([]);

  const handleDogClick = async () => {
    const res = await fetch(
      "https://api.thedogapi.com/v1/images/search?limit=1"
    );
    if (res.status === 200) {
      const dogData = await res.json();
      setDogImages(dogData.map((data) => data.url));
    } else {
      alert(`Something went wrong: ${res.status} code returned`);
    }
  };

  const handleCatClick = async () => {
    const res = await fetch(
      "https://api.thecatapi.com/v1/images/search?limit=1"
    );
    if (res.status === 200) {
      const catData = await res.json();
      setCatImages(catData.map((data) => data.url));
    } else {
      alert(`Something went wrong: ${res.status} code returned`);
    }
  };

  return (
    <>
      <button onClick={handleDogClick}>Get a dog</button>
      <div>
        <DogImages dogImages={dogImages} />
      </div>

      <button onClick={handleCatClick}>Get a cat</button>
      <div>
        <CatImages catImages={catImages} />
      </div>
    </>
  );
}

export default App;
