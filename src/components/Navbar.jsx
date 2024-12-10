import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    
    <nav className="navbar navbar-expand-lg navbar-light p-4 m-4">
      <div className="container-fluid">
        <h2 className="navbar-brand fs-4" to="/">Company Name</h2>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/features">Features</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/enterprise">Enterprise</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/support">Support</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
          </ul>
          <hr/>
        </div>
      </div>
  
      <div className="mt-4">
      
      </div>
    </nav>
  );
}

export default Navbar;
