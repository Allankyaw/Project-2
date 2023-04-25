import React from "react";
import { useState } from "react";

function App() {
  const [dogImage, setDogImage] = useState(null);
  const [catImage, setCatImage] = useState(null);

  const handleDogClick = async () => {
    const res = await fetch(
      "https://api.thedogapi.com/v1/images/search?limit=1"
    );
    if (res.status === 200) {
      const data = await res.json();
      setDogImage(data[0].url);
    } else {
      alert(`Something went wrong: ${res.status} code returned`);
    }
  };

  const handleCatClick = async () => {
    const res = await fetch(
      "https://api.thecatapi.com/v1/images/search?limit=1"
    );
    if (res.status === 200) {
      const data = await res.json();
      setCatImage(data[0].url);
    } else {
      alert(`Something went wrong: ${res.status} code returned`);
    }
  };

  return (
    <>
      <button onClick={handleDogClick}>Get a dog</button>
      {dogImage && (
        <div>
          <img src={dogImage} alt="Dog" />
        </div>
      )}

      <button onClick={handleCatClick}>Get a cat</button>
      {catImage && (
        <div>
          <img src={catImage} alt="Cat" />
        </div>
      )}
    </>
  );
}

export default App;
