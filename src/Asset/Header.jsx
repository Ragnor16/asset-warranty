import React,{useRef} from 'react';
import "./Header.css"
import './font.css';
import './logo.png'

function Header() {
  const headerRef = useRef(null);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      headerRef.current.classList.add('scrolled');
    } else {
      headerRef.current.classList.remove('scrolled');
    }
  });
  
  

  const handleClick = () => {
    const navBar = document.querySelector('.nav-bar');
    navBar.classList.toggle('active');
    document.body.classList.toggle('nav-active');
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
            <a href="#" style={{ fontFamily: 'Axiforma', textDecoration:'none'}} className="active">Product</a>
          </li>
          <li>
            <a href="#" style={{ fontFamily: 'Axiforma',textDecoration:'none' }} className="active">Dealer</a>
          </li>
          <li>
            <a href="#" style={{ fontFamily: 'Axiforma',textDecoration:'none' }} className="active">Enroll</a>
          </li>
          <li>
            <a href="#"  style={{ fontFamily: 'Axiforma',textDecoration:'none' }}className="active">Stock</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
