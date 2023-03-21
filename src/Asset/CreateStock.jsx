
import React, { useState ,useEffect} from 'react';
import Form from 'react-bootstrap/Form';
import "./CreateStock.css"
import TextField from "@mui/material/TextField";
import { Modal, ModalBody } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import axios from './axios';


function CreateStock({show,onHide}) {

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [productId, setProductId] = useState('');

  const handleSelectProduct = async (product) => {
    const selectedProductId = product.productName;
    setSelectedProduct(product);
    setProductId(selectedProductId);
    try {
      const response = await axios.get(`/viewstock?productId=${product._id}`);
      const modelsForProduct = response.data.models.filter(model => model.product === product._id);
      setFilteredModels(modelsForProduct);
    } catch (error) {
      console.error(error);
    }
  };
      
  
  
  
  const [products,setProducts] = useState([]);
  const [selectedModel,setSelectedModel] = useState(null);
  const [modelId,setModelId] = useState([]);

  const handleSelectModel = (model) => {
    const selectedModelId = model.modelName;

  setSelectedModel(model);
  setModelId(selectedModelId);

  };

const [models,setModels] = useState([]);
const [filteredModels, setFilteredModels] = useState([]);

const [selectedDealer,setSelectedDealer] = useState(null);
const [dealerId,setDealerId] = useState('');

const handleSelectDealer = (dealer) => {
  const selectedDealerId = dealer.name;
  setSelectedDealer(dealer);
  setDealerId(selectedDealerId);

};

const [dealers,setDealers] = useState([]);
const [serialNumber,setSerialNumber] = useState('')
useEffect(()=> {
  const fetchdata =async ()=> {
    const result = await axios.get('/viewstock');
    setProducts(result.data.products);
    setModels(result.data.models);
    setDealers(result.data.dealers);

  };
  fetchdata();
}, [])

const handleSerialNumber=(e)=>{
  setSerialNumber(e.target.value);
}

const handleSubmit = async (event) => {
  event.preventDefault();
 
  try {
    const response = await axios.post(`/viewstock/${selectedProduct?.productName},${selectedModel?.modelName},${selectedDealer?.name}`, {
      
    
      serialNumber,
        });
    console.log(response.data);
    setSelectedProduct(null);
    setSelectedModel(null);
    setSelectedDealer(null);
    setSerialNumber('');
    onHide();
  } catch (error) {
    console.error(error);
  }
};
 
  return (
    <Modal show={show} onHide={onHide}>
        <ModalBody>
        
    <div className='AddStock'>
        <br/><h1 style={{ display: "flex", justifyContent: "center", fontFamily: "Dennis Sans", color: 'blue' }}>
        Add a Stock
      </h1>

        <form className="login-form"  onSubmit={handleSubmit}>
        <div className='d0d1'>
        <Dropdown className='dp'>
              <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                {selectedProduct ? selectedProduct.productName : 'Select product'}
              </Dropdown.Toggle>

              <Dropdown.Menu variant="dark">
                {products &&
                  products.map((product) => (
                    <Dropdown.Item
                    key={product._id}
                      active={selectedProduct === product}
                      onClick={() => handleSelectProduct(product)}
                    >
                      {product.productName}
                    </Dropdown.Item>
                  ))}
              </Dropdown.Menu>
            </Dropdown>
  </div>
  <br />


  <div className='d0d1'>
        <Dropdown className='dp'>
              <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                {selectedModel ? selectedModel.modelName : 'Select Model'}
              </Dropdown.Toggle>

              <Dropdown.Menu variant="dark">
    {filteredModels.map((model) => (
      <Dropdown.Item
        key={model._id}
        active={selectedModel === model}
        onClick={() => handleSelectModel(model)}
      >
        {model.modelName}
      </Dropdown.Item>
                  ))}
              </Dropdown.Menu>
            </Dropdown>
  </div>
  <br />
  

  <div className='d0d1'>
        <Dropdown className='dp'>
              <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                {selectedDealer ? selectedDealer.name : 'Select Dealer'}
              </Dropdown.Toggle>

              <Dropdown.Menu variant="dark">
                {dealers &&
                  dealers.map((dealer) => (
                    <Dropdown.Item
                    key={dealer._id}
                    active={selectedDealer === dealer}
                      onClick={() => handleSelectDealer(dealer)}
                    >
                      {dealer.name}
                    </Dropdown.Item>
                  ))}
              </Dropdown.Menu>
            </Dropdown>
  </div>
  <br />

  
<div className='d0d1'>
<TextField
          required
          id="outlined-required"
          label="Serial Number"
          className="serial"
          value={serialNumber}
          onChange={handleSerialNumber}
          />
    </div>
    <br/>

    <div className="btndiv">
      <button style={{ backgroundColor: 'BLUE',  }} className="btn1" >Add a Stock</button>
      </div>


              <br/>
</form>
<br />
<br />

<br/>
</div>
</ModalBody>
</Modal>
  )
}

export default CreateStock;
