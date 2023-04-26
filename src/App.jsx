import React from "react";
import { useState } from "react";

function App() {
  const [dogImage, setDogImage] = useState([]);
  const [catImage, setCatImage] = useState([]);

  const handleDogClick = async () => {
    const res = await fetch(
      "https://api.thedogapi.com/v1/images/search?limit=1"
    );
    if (res.status === 200) {
      const dogData = await res.json();
      setDogImage(dogData.map((data) => data.url));
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
      setCatImage(catData.map((data) => data.url));
    } else {
      alert(`Something went wrong: ${res.status} code returned`);
    }
  };

  return (
    <>
      <button onClick={handleDogClick}>Get a dog</button>
      <div>
        {dogImage.map((url, index) => (
          <div key={index} className="dog">
            <img src={url} alt="Dog" />
          </div>
        ))}
      </div>

      <button onClick={handleCatClick}>Get a cat</button>
      <div>
        {catImage.map((url, index) => (
          <div key={index} className="cat">
            <img src={url} alt="cat" />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
