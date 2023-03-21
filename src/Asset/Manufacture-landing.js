
import React,{useEffect} from 'react'
import Footer from './Footer'
import Header from './Header'
import "./Manufacuturelanding.css"
import './font2.css'

function Manufacturelanding() {
  useEffect(() => {
    function handleScrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
    const button = document.querySelector('.up');
    button.addEventListener('click', handleScrollToTop);
    return () => {
      button.removeEventListener('click', handleScrollToTop);
    };
  }, []);

const rows = document.querySelectorAll('.twop > div');

rows.forEach(row => {
  row.addEventListener('click', () => {
    row.classList.toggle('animate');
  });
});

  return (
    <div>
<header className="manufacturing-header">
  <Header/>
</header>
        <div className="topc">

        
    <div className='content'  style={{ fontFamily: 'Helvetica Now' }}>
      <h1  style={{color:'red',fontSize:'45px' }}>Assign and manage</h1>
      
    <h2  style={{fontSize:'30px',fontFamily:'sans-serif'}} >your products here</h2>
    <br />
      <h2 style={{fontSize:'15px',color:'grey'}}> Developing a comprehensive warranty strategy, understanding warranty terms and conditions, and handling warranty claims efficiently, manufacturers and dealers can provide customers with high-quality products and services and maintain customer satisfaction.</h2>
      </div>
    <div className='img-lod'>
        <img className='img11' src="https://timebusinessnews.com/wp-content/uploads/CriticalAssetTracking-1600x945-01-1-800x445.jpg"></img>
        </div>
    </div>
    <div className='twop'  style={{ fontFamily: 'Helvetica Now' }}>
  <div className='row1'>
    <div className='logo'>
      <img src='./logo1.png' alt='Logo 1'/>
    </div>
    <h2 style={{fontSize:'25px',fontWeight:'600'}}>MANUFACTURER</h2><br/>
    <h2 style={{fontSize:'15px',fontWeight:'400'}}>Manufacturers are responsible for adding products to their inventory and managing dealer allocations by efficiently assigning available stock to authorized dealers, ensuring a streamlined distribution process.</h2>
  </div>
  <div className='row2'>
    <div className='logo'>
      <img src='./logo2.png' alt='Logo 2'/>
    </div>
    <h2 style={{fontSize:'25px',fontWeight:'600'}}>DEALER</h2><br/>
    <h2 style={{fontSize:'15px',fontWeight:'400'}}>Authorized dealers are responsible for managing their allocated stock, maintaining accurate inventory counts, and facilitating sales transactions to ensure optimal product availability and customer satisfaction.</h2>
  </div>
  <div className='row3'>
    <div className='logo'>
      <img src='./logo3.png' alt='Logo 3'/>
    </div>
    <h2 style={{fontSize:'25px',fontWeight:'600'}}>CUSTOMER</h2><br/>
    <h2 style={{fontSize:'15px',fontWeight:'400'}}>Customers can access product details and warranty information by scanning the QR code, which enables quick and convenient access to essential information, enhancing the overall customer experience.



</h2>
  </div>



    </div>

    <div className='part3' >
      
    <div className='floating'>
  <img src="https://www.inpixon.com/hs-fs/hubfs/website_graphics/diagrams/how-rtls-works-diagram.png?width=2411&height=1668&name=how-rtls-works-diagram.png"></img>
</div>
      <div className='pc'>
<h2 className='t1'>Tracking made easy</h2><br/>
<h7 classname='t2' style={{fontSize:'14px',color:'#beceda'}}>Using web 3 and blockchain technology can make tracking of assets and their warranty status easier and more secure.
With blockchain, asset ownership can be recorded immutably and transparently, reducing fraud and errors in the warranty process.

Web 3 technologies can enable easy access to this information via decentralized applications, making it simpler for both consumers and businesses to track asset ownership and warranty claims</h7>

<br/><br/><br/><br/><br/>
<button className='up'>
  ↑
</button>
</div>

</div>

<div className='manu-footer'>    
  <Footer/>
  </div>

    </div>
    

  )
}

export default Manufacturelanding
