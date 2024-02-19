import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Joystick } from "react-joystick-component";

function App() {
  const urlSearchString = window.location.search;

  const params = new URLSearchParams(urlSearchString);

  useEffect(() => {
    console.log(params.get("type"));
  });

  const onMove = (e) => {
    console.log(e);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div>
        <Joystick size={100} baseColor="red" stickColor="blue" move={onMove} />
      </div>
    </div>
  );
}

export default App;
