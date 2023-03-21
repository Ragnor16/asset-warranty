import React, { useState } from 'react'
import './Addproduct.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import axios from './axios';
import './font.css';
import './font2.css'
import Header from './Header';


function Addproduct() {


    const [productName,setProductName] = useState('');
    const [productDes,setProductDes] = useState('');

const addproduct =(e)=>{
    e.preventDefault();

    axios.post('/addproduct',{productName,productDes}).then((res)=>{
        if(res.data.message==='success'){
            alert('Product added Successfully')
        }
        setProductName('')
        setProductDes('')
        })
    
    .catch((error)=>alert(error.message));
}

  return (
    <div>
      <Header />
    <div className='Add-list' style={{ fontFamily: 'Helvetica Now' }}>
   <form class="form-horizontal" >
<legend className='p1'> ADD PRODUCTS</legend>
<form className='proform'>
  
  <label className='p1' class="col-md-4 control-label" htmlFor="product_id">PRODUCT NAME </label>  
  
  <input className='p2' id="product_id" name="product_id" placeholder="Name" class="form-control input-md"  type="text" onChange={(e)=> setProductName(e.target.value)} value={productName} />
    
<div className='add2'>
  <label className='p1' class="col-md-4 control-label" htmlFor="product_name">PRODUCT DESCRIPTION</label>  
  <textarea className='p2' id="product_name" name="product_name" placeholder="Description" class="form-control input-md"  type="textarea" onChange={(e)=>  setProductDes(e.target.value)} value={productDes} />
  </div>


    <button id="singlebutton" name="singlebutton" className="add-btn" onClick={addproduct}>Add product</button>
    </form> 
     

      </form>
     
    </div>
    
    </div>    
  )
}

export default Addproduct
