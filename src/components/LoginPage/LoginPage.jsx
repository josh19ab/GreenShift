import './LoginPage.css'  
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import SearchIcon from '@mui/icons-material/Search';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar'

function LoginPage() {
  return (
    <div>
      <Navbar/>
    <div className='LoginPage'>
      <div className="hero">
        <h3>
        What's your phone number or email?
        </h3>
        <input type="text" placeholder='Enter email or phone number'/>
        <input type="text" placeholder='Enter password' />
        <Link to='home'>
        <button className='loginbtn'>Continue  </button>
        </Link>
        <div className="appleGoogle">
        <div className="loginGoogle"> 
          <GoogleIcon />
          <p>Continue with google</p>
        </div>
        <div className="loginApple">
        <AppleIcon/>
        
          <p>Continue with Apple</p>
        </div>
        </div>

        <div className="findAcnt">
        <SearchIcon/>
        <h3>find my Account</h3>
        </div>
        <div className="loginQR">
        <QrCodeScannerIcon/>
        <h3>Log in with QR code</h3>
        </div>

        <p className='loginButn'>By proceeding, you consent to get calls, WhatsApp or SMS messages, including by automated means, from Uber and its affiliates to the number provided..</p>
      </div>
      
    </div>
    </div>
  );
}

export default LoginPage;
