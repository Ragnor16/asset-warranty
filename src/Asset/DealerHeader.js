import React from 'react';
import "./Header.css"
import './font.css';
import './logo.png'

function Header() {
  const handleClick = () => {
    const navBar = document.querySelector('.nav-bar');
    navBar.classList.toggle('active');
  }

  return (
    <header>
      <div className="logo" style={{ fontFamily: 'Axiforma' }}>Asset warranty</div>
      <div className="profile" onClick={handleClick}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <nav className="nav-bar" >
        <ul>
          <li>
            <a href="#" style={{ fontFamily: 'Axiforma' }} className="active">Stock</a>
          </li>
          <li>
            <a href="#" style={{ fontFamily: 'Axiforma' }} className="active">Logout</a>
          </li>
         
        </ul>
      </nav>
    </header>
  );
}

export default Header;
