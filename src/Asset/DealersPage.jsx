import React, { useEffect ,useState} from 'react'
import axios from './axios';
import Editprod from './Editprod';
import Header from './Header';
import './font2.css'
import { useNavigate } from 'react-router-dom';

import "./DealersPage.css";
import { Modal, ModalBody } from 'react-bootstrap';

function DealersPage() {
  const navigate = useNavigate();
  const [showEditProd, setShowEditProd] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [products,setProducts] = useState('');

  const handleEdit = (product) => {
    setSelectedProduct({...product, status: product.status ? 'Active' : 'Inactive'})
        setShowEditProd(true);
  }

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
      <br />
    <div>    <button onClick={() => navigate("/addproduct")}>Add Product</button>
</div>
<br/>
      <div className="boxcont2" style={{ fontFamily: 'Helvetica Now' }}>
        <div class="table-container">
          <table class="table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Status</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {products && products.data.map((product)=>(
                <tr key={product._id}>
                  <td>{product.productName}</td>
                  <td>{product.status ? "Active" : "Inactive"}</td>
                  <td>
                    <button className='Edit-btn' onClick={() => handleEdit(product)}>Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="head2" style={{ fontFamily: "Axiforma" }}>
        Copyright &copy; 2023 | Asset Warrenty
      </div>

      <Modal show={showEditProd} onHide={() => setShowEditProd(false)}>
        <ModalBody >
          <Editprod product={selectedProduct} onClose={() => setShowEditProd(false)} />
        </ModalBody>
      </Modal>
    </div>
  );
}

export default DealersPage;
