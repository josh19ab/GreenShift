import "./HomePage.css"
import Navbar from '../Navbar/Navbar'

// import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <Navbar/>
      <div className="home">
          <div className="Hero">
            <h1>GreenShift</h1>
            <p>An ecoTransit app for controlling carbon emission</p>
            <div className="searchArea">
              <input type="text" />
              <input type="text" />
              </div>  
            <button>Check routes</button>

            
          </div>


    </div>
    </div>
  );
}

export default HomePage;
