import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="Navbar">
      <div className="textContainer">
        <h1>GreenShift</h1>
      </div>
      <div className="navItem">
        <Link to="/Home"> Home</Link>
        <Link to="/services"> Services</Link>
        <Link to="/Activity"> Activity</Link>
        <Link to="/Profile"> Profile</Link>
      </div>
    </div>
  );
}

export default Navbar;
