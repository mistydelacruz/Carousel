/***************************************
 * Created by: Misty Dela Cruz
 * Created on: 2/7/2024
 * Last Modified: 5/20/2024
 * Updates:
 * Used MUI buttons as placeholders for the Atlassian deisgn system.
 * Carousel is working on the right side of the page.
 ***************************************/

import "./App.css";
import Logo from "./assets/ImagineLogo.png";
import Carousel from "./components/Carousel";
import { Button } from "@mui/material";

function App() {
  return (
    <>
      {/***************************************
       *               LEFT SIDE               *
       ***************************************/}
      <div className="split left">
        {/*Divider for the logo*/}
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>

        {/*Divider for the contents of the left side*/}
        <div className="left-content">
          <h1>
            <strong>Welcome!</strong>
          </h1>
          <p className="sub">
            <strong>
              Please <strong>login</strong> to your account
            </strong>
          </p>

          {/*Divider for register*/}
          <div className="register">
            <p>
              Don't have an account? <em>Register</em>
            </p>
          </div>
          <div className="first-button">
            <Button sx={{ margin: "auto", width: "100%" }}>
              Login with CAC
            </Button>
          </div>
          <div className="sec-button">
            <Button sx={{ margin: "auto", width: "100%" }}>
              Login with YubiKey
            </Button>
          </div>
        </div>
      </div>
      {/***************************************
       *               RIGHT SIDE              *
       ***************************************/}
      <div className="split right">
        {/*Divider for the right side: Image Carousel*/}
        <Carousel />
      </div>
    </>
  );
}

export default App;
