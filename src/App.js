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
      <Joystick size={100} baseColor="rgba(245, 245, 245, 0.2)" stickColor="rgba(128, 128, 128, 0.5)" move={onMove} />
      </div>
    </div>
  );
}

export default App;
