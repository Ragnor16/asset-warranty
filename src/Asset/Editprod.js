import React, { useState } from 'react';
import './Editprod.css';
import axios from './axios';
import './font2.css';
import { Modal, ModalBody } from 'react-bootstrap';

function Editprod({ product, onClose }) {
  
  const [productName, setProductName] = useState(product.productName);
  const [productDes, setProductDes] = useState(product.productDes);
  const [status, setStatus] = useState(product.status);


  const handleSave = async () => {
    try {
      await axios.put(`/editProduct/${product._id}`, {
        productName,
        productDes,
        status,
      });
      onClose();
    } catch (e) {
      console.error(e);
    }
  };

  return (
  <div>

    <div className='Addproduct' style={{ fontFamily: 'Helvetica Now' }}>
      <form className="form-product">
        <legend className='p1' style={{ fontFamily: 'Helvetica Now' }}> EDIT PRODUCTS</legend>
        <div className='proform1'>
          <label className='labelform' style={{ fontFamily: 'Helvetica Now' }} htmlFor="product_id">PRODUCT NAME </label>
          <input
            className='p2 form-control input-md'
            id="product_id"
            name="product_id"
            placeholder="Name"
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />

          <div className='add2'>
            <label className='labelform' style={{ fontFamily: 'Helvetica Now' }} htmlFor="product_name">PRODUCT DESCRIPTION</label>
            <textarea
              className='p2 form-control input-md'
              id="product_name"
              name="product_name"
              placeholder="Description"
              type="textarea"
              value={productDes}
              onChange={(e) => setProductDes(e.target.value)}
            />
          </div>
          <div className="wrapper">
            <input
              type="radio"
              name="status"
              id="active"
              value={status}
              checked={status === true}
              onChange={(e) => setStatus(true)}
            />
            <label className="option" htmlFor="active">
              <div className="dot"></div>
              <span>Active</span>
            </label>
            <input
              type="radio"
              name="status"
              id="inactive"
              value={status}
              checked={status === false}
              onChange={() => setStatus(false)}
            />
            <label className="option" htmlFor="inactive">
              <div className="dot"></div>
              <span>Inactive</span>
            </label>
          </div>
          <button id="singlebutton"  name="singlebutton" className="add-btn" onClick={handleSave}>Save</button>
          <button id="singlebutton" name="singlebutton" className="add-btn" onClick={onClose}>Close</button>

        </div>
      </form>
    </div>
    </div>
  )
}

export default Editprod;
