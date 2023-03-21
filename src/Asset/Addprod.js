import React, { useState ,useEffect} from 'react';
import './Editprod.css';
import axios from './axios';
import './font2.css';
import './Addproduct.css'
import { Dropdown } from 'react-bootstrap';
import Header from './Header';
function Addprod() {

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [productId, setProductId] = useState('');

  const [modelName, setModelName] = useState('');
  const [modelDes, setModelDescription] = useState('');

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
    setProductId(product.productName);

  };

  const handleModelNameChange = (e) => {
    setModelName(e.target.value);
  };

  const handleModelDescriptionChange = (e) => {
    setModelDescription(e.target.value);
  };

  
  const handleAddModel = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.patch(`/add/${selectedProduct.productName}`, {
        modelName: modelName,
        modelDes: modelDes
      });
      console.log(res.data);
      // Reset the form
      setSelectedProduct(null);
      setModelName('');
      setModelDescription('');
    } catch (e) {
      console.error(e);
    }
  };
  
  const [products,setProducts] = useState('');

  useEffect(()=> {
    const fetchdata =async ()=> {
      const data =await axios.get('/add')
      setProducts(data)
    };
    fetchdata();
  }, [])

  return (
    <div>
      <Header />
      <div className='Add-list' style={{ fontFamily: 'Helvetica Now' }}>
        <form className="form-horizontal" onSubmit={handleAddModel}>
          <legend className='p1' style={{ fontFamily: 'Helvetica Now' }}> ADD PRODUCTS</legend>
          <div className='proform'>
            <Dropdown className='dp'>
              <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                {selectedProduct ? selectedProduct.productName : 'Select product'}
              </Dropdown.Toggle>

              <Dropdown.Menu variant="dark">
                {products &&
                  products.data.map((product) => (
                    <Dropdown.Item
                      active={selectedProduct === product}
                      onClick={() => handleSelectProduct(product)}
                    >
                      {product.productName}
                    </Dropdown.Item>
                  ))}
              </Dropdown.Menu>
            </Dropdown>
            <label className='editname'style={{ fontFamily: 'Helvetica Now' }} >MODEL NAME </label>
            <input
              className='p2 form-control input-md'
              id="model_id"
              name="model_id"
              placeholder="Name"
              type="text"
              value={modelName}
              onChange={handleModelNameChange}
            />

            <div className='add2'>
              <label className='editname' style={{ fontFamily: 'Helvetica Now' }}>MODEL DESCRIPTION</label>
              <textarea
                className='p2 form-control input-md'
                id="description_name"
                name="description_name"
                placeholder="Description"
                type="text"
                value={modelDes}
                onChange={handleModelDescriptionChange}
              /><br/>
            </div>

            <button id="singlebutton"  name="singlebutton" className="add-btn" >Add</button>
          


        </div>
      </form>
    </div>
    <div className="head2" style={{ fontFamily: "Axiforma" }}>
        Copyright &copy; 2023 | Asset Warrenty
      </div>
    </div>
  )
}

export default Addprod;