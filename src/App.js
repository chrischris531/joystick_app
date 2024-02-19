import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Joystick } from "react-joystick-component";
import Switch from '@mui/material/Switch';
import axios from 'axios';

function App() {
  const [joystickData, setJoystickData] = useState({ x: 0, y: 0 });
  const [switchState, setSwitchState] = useState(false); // false for off, true for on
  const url = "http://146.169.185.195:5000";

  const sendDataToServer = (data) => {
    console.log(data);

    axios.post(url, data)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  };

  const onMove = (e) => {
    const x = e.x;
    const y = e.y;
    setJoystickData({ x, y });
    const data = {
      content: `Switch: ${switchState ? "on" : "off"}, Joystick: X=${x}, Y=${y}`
    };
    sendDataToServer(data);
  };

  const handleChange = (event) => {
    const newSwitchState = event.target.checked;
    setSwitchState(newSwitchState);
    const data = {
      content: `Switch: ${newSwitchState ? "on" : "off"}, Joystick: X=${joystickData.x}, Y=${joystickData.y}`
    };
    sendDataToServer(data);
  };


  return (
    <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-end", // Add this line to align items vertically in the center
      position: "absolute", // Use absolute positioning
      top: "50%", // Position the top edge of the element at the middle of the parent
      left: "50%", // Position the left edge of the element at the middle of the parent
      transform: "translate(-50%, -50%)", // Shift the element up and to the left by half its height and width
      height: "100vh", // Make div take up the full viewport height
      paddingBottom: "20%"
  }}

    >
      <div style={{ marginBottom: "20px" }}>
        <Joystick size={100} baseColor="rgba(245, 245, 245, 0.5)" stickColor="rgba(128, 128, 128, 0.7)" move={onMove} />
      </div>

      <div>
        <p>Switch State: {switchState ? 'On' : 'Off'}</p>
        <Switch checked={switchState} onChange={handleChange} inputProps={{ 'aria-label': 'controlled' }}/>
        {switchState ? 'Switch is ON' : 'Switch is OFF'}
      </div>

    </div>
  );
}

export default App;
