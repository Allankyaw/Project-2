import React from "react";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const getData = async () => {
    const res = await fetch(
      "https://api.thedogapi.com/v1/images/search?limit=3"
    );
    if (res.status === 200) {
      const data = await res.json();
      setData(data);
    } else {
      alert(`Something went wrong: ${res.status} code returned`);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {data.map((fact) => (
        <div key={fact.url}>{fact.url}</div>
      ))}
    </>
  );
}

export default App;
