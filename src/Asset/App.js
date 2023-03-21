import React, {useState} from "react" 
import { Route, Routes } from "react-router-dom";
import './LR.css';
import Login from './Login'
import Modelpage from "./Modelpage";
// import Asset from './Asset'
// import ProductDealer from "./ProductDealer";
// import Dealer from "./Dealer";
import Manufacturelanding from "./Manufacture-landing";
import Addproduct from "./Addproduct";
// import ManuEdit from "./ManuEdit";
import DealersPage from "./DealersPage";
import Addprod from "./Addprod";
import CreateStock from "./CreateStock";
import Stock from "./Stock";


function App() {
  // const [currentForm,setCurrentForm]=useState('login');
  
  // const toggleForm = (formName) =>{
  //   setCurrentForm(formName);
  
  
  return (
    <div>
      <Routes>
        
      <Route path="/" element={<Login/>}/>
      <Route path="/home" element={<Manufacturelanding/>}/>
      <Route path ="/addproduct" element={<Addproduct/>} />
      <Route path ="/editproduct" element={<DealersPage/>} />
      <Route path ="/add" element={<Addprod/>} />
      <Route path ="/addmodel" element={<Modelpage/>} />
      <Route path ="/addstock" element={<CreateStock/>} />
      <Route path ="/viewstock" element={<Stock/>} />




      </Routes>
  {/* <Header/> */}
  {/* <Login/> */}
  {/* <Addproduct1 /> */}
  {/* <ManuEdit /> */}
    </div>
  );
}

export default App;
