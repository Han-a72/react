// Assignment.js
import { Link } from 'react-router-dom';

function Assignment() {
  return (
    <>
      <div className="nav">
        <h2>Company name</h2>
        <nav>
          <Link to="/features">Features</Link>
          <Link to="/enterprise">Enterprise</Link>
          <Link to="/support">Support</Link>
          <Link to="/">Home</Link>
        </nav>
      </div>
      <hr className="line-1" />
      <div className="body">
        <h1>Features</h1>
      </div>
      <br />
      <br />
      <br />
      <hr className="line-2" />
      <div className="footer">
        <div className="part-1">
          <h2>Features</h2>
          <a href="#">
            <ol>Cool Stuff</ol>
          </a>
          <a href="#">
            <ol>Random Feature</ol>
          </a>
          <a href="#">
            <ol>Team Feature</ol>
          </a>
        </div>
        <div className="part-2">
          <h2>Resources</h2>
          <a href="#">
            <ol>Resource</ol>
          </a>
          <a href="#">
            <ol>Resource Name</ol>
          </a>
        </div>
        <div className="part-3">
          <h2>About</h2>
          <a href="#">
            <ol>Team</ol>
          </a>
          <a href="#">
            <ol>Location</ol>
          </a>
        </div>
      </div>
    </>
  );
}

export default Assignment;
