import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
           <Navbar /> 
      <Link to="/">Home</Link>
      <Link to="/assignment">Assignment</Link>
      <Link to="/enterprise">Enterprise</Link>
      <Link to="/features">Features</Link>
      <Link to="/support">Support</Link>
    </nav>
  );
}

export default Navbar;

