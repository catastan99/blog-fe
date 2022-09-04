import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="Footer">
      <div className="container">
        <div className="footer-container">
          <div className="footer-group">
            <h4>Linkuri</h4>
            <p>
              <Link to="/articles">Articole</Link>
            </p>
            <p>
              <Link to="/">Despre mine</Link>
            </p>
            <p>
              <Link to="/">Contact</Link>
            </p>
          </div>
          <div className="footer-group">
            <h4>Alte surse</h4>
            <p>Lorem, ipsum dolor.</p>
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem, ipsum.</p>
          </div>
          <div className="footer-group">
            <h4>blabla</h4>
            <p>Lorem, ipsum dolor.</p>
          </div>
          <div className="footer-group">
            <h4>blabla</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              recusandae qui est consequatur labore dolorem!
            </p>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <p>&copy; 2022 Vasile Ion</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
