import React from "react";
import { useState } from "react";
import DogImages from "./Components/DogImages";
import CatImages from "./Components/CatImages";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
// import { Link } from "react-router-dom";

function App() {
  const [dogImages, setDogImages] = useState([]);
  const [catImages, setCatImages] = useState([]);

  const handleDogClick = async () => {
    const res = await fetch("https://dog.ceo/api/breeds/image/random/1");
    if (res.status === 200) {
      const dogData = await res.json();
      setDogImages(dogData.message.map((element) => element));
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
      setCatImages(catData.map((element) => element.url));
    } else {
      alert(`Something went wrong: ${res.status} code returned`);
    }
  };

  return (
    <>
      <div className="container">
        <NavBar />
        <main>
          <Routes>
            <Route path="/" />
            <Route
              path="/DogImages"
              element={
                <DogImages dogImages={dogImages} handleClick={handleDogClick} />
              }
            />
            <Route
              path="/CatImages"
              element={
                <CatImages catImages={catImages} handleClick={handleCatClick} />
              }
            />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
