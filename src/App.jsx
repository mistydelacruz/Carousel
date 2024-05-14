/***************************************
* Created by: Misty Dela Cruz
* Created on: 2/7/2024
* Last Modified: 4/29/2024
* Updates:
* Added the Button component and coding out the layout of the page
***************************************/

import './App.css'
import Logo from './assets/ImagineLogo.png'
import Carousel from './components/Carousel';
import { Button } from '@mui/material';

function App() {

  return (
    <>
      <div className='split left'>             {/*Divider for the left side of the page*/}
        <div className='logo'>                 {/*Divider for the logo*/}
          <img src={Logo} alt='logo'/>
        </div>
        <div className='left-content'>         {/*Divider for the contents of the left side*/}
          <h1><strong>Welcome!</strong></h1>
          <p className='sub'><strong>Please <strong>login</strong> to your account</strong></p>
          <div className='register'>                                                            {/*Divider for register*/}
            <p>Don't have an account? <em>Register</em></p>
          </div>
          <div className='first-button'>                                                        {/*Divider for the first button login*/}
            <button>Login with CAC</button>
          </div>
          <div className='sec-button'>                                                          {/*Divider for the second button login*/}
            <button>Login with YubiKey</button>
          </div>
        </div>
      </div>
      <div className='split right'>            {/*Divider for the right side: Image Carousel*/}
        <Carousel />
      </div>
    </>
  )
}

export default App