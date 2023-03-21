import React, { useEffect ,useState} from 'react'
import './Addproduct.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import axios from './axios';
import Header from './Header';
import './font.css';
import { Dropdown } from 'react-bootstrap';


function ManuEdit() {


  
    const [products,setProducts] = useState('');

    useEffect(()=> {
        const fetchdata =async ()=> {
            const data =await axios.get('/editproduct')
        setProducts(data)
        
        };
        fetchdata();
    }, [])

  return (
    <div>
    <Header/>
    <div className='Add-list'>
   <form class="form-horizontal" >
<legend className='p1'  style={{ fontFamily: "Axiforma" }}> EDIT PRODUCTS</legend>
<form className='proform'>
  
<Dropdown>
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
        Select product
        </Dropdown.Toggle>

        <Dropdown.Menu variant="dark">
            {
                products && products.data.map((product )=>(<Dropdown.Item href="#/action-1" active>
                {product.productName}
              </Dropdown.Item>))
            }
        
      
         
        </Dropdown.Menu>
      </Dropdown>
    </form> 
     

      </form>
      <div className="head2" style={{ fontFamily: "Axiforma" }}>
        Copyright &copy; 2023 | Asset Warrenty
      </div>
    </div>
    
    </div>    
  )
}

export default ManuEdit
