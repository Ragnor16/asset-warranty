import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import './Header.css'



function header() {
  return (
  	<header class="header">
		<h1 class="logo"><a href="#">Assetwarranty</a></h1>
      <ul class="main-nav">
        <div class="dropdown">
          
          <a href="#" class='profile'>Profile</a>
          <div class="menu">
<a href = "#">  Product</a>
<a href = "#">Dealer</a>
<a href = "#">Enroll</a>
          </div>
          </div>
      </ul>+
	</header> 


  );
}

export default header;