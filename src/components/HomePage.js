// HomePage.js
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h2>Home Page</h2>
      <Link to="/services">Services</Link>
      {/* Add trip planner and suggestions components here */}
    </div>
  );
}

export default HomePage;
