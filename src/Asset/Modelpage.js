import React, { useEffect ,useState} from 'react';
import axios from './axios';
import Editprod from './Editprod';
import Header from './Header';
import './font2.css';
import { useNavigate } from 'react-router-dom';
import { Modal, ModalBody } from 'react-bootstrap';

function Modelpage() {
  const navigate = useNavigate();
  const [models, setModels] = useState([]);

  useEffect(() => {
    axios.get('/addmodel')
      .then(response => {
        setModels(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <Header/>
      <br />
      <div>    
        <button onClick={() => navigate("/addproduct")}>Add model</button>
      </div>
      <br/>
      <div className="boxcont2" style={{ fontFamily: 'Helvetica Now' }}>
        <div class="table-container">
          <table class="table">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Model Name</th>
                <th>status</th>
                <th>Warranty</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {models.map(model => (
                <tr key={model._id}>
<td>{model.product?.productName}</td>
                  <td>{model.modelName}</td>
                  <td>{model.status ? "Active" : "Inactive"}</td>
                  <td><button>View warranty</button></td>
                  <td><button>Edit</button></td>
                 
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Modelpage;
