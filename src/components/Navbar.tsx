import React from 'react';


const Navbar: React.FC = () => (
  <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#e3f2fd' }}>
    <div className="container">
      <a className="navbar-brand" href="/home">TypeScript App</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto">
          {['home', 'about', 'report', 'notification'].map((link) => (
            <li className="nav-item" key={link}>
              <a
            className={`nav-link ${window.location.pathname === `/${link}` ? 'active' : ''}`}
            href={`/${link}`}
              >
            {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            </li>
          ))}
        </ul>
        
      </div>
    </div>
  </nav>
);

export default Navbar;
