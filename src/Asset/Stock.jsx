import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import CreateStock from "./CreateStock";
import "./Stock.css";

function Stock() {
  const [show, onHide] = useState(false);

  const handleOpenModal = () => {
    onHide(true);
  };
  const handleCloseModal = () => {
    onHide(false);
  };
  return (
    <div>
      <br />
      <br />
      <div className="asd">
        {/* <div className="d0d2">
          <Form.Select aria-label="Default select example">
            <option>select Model</option>
            <option value="1">Tv</option>
            <option value="2">Watch</option>
            <option value="3">Phone</option>
          </Form.Select>
        </div> */}
        <br />
        <br />
        {/* <div className="search-container" style={{ margin:'0px 0px 0px 150px ', backgroundColor:'white', boxshadow: '0 24px 64px #26214a1a', borderradius: '12px'}}>
      <form class="search" action="">
        <input
          class="search-input"
          type="search"
          placeholder="Search here..."
          required
        />
        <button className="search-btn" type="submit">
          Search Product
        </button>
      </form>
    </div> */}
        <div>
        </div>

        <div className="popbtn">
          <button
            className="btn2"
            style={{ backgroundColor: "BLUE", margin: "0px 0px 0px 100px " }}
            onClick={handleOpenModal}
          >
            {" "}
            Add stock
          </button>
          <CreateStock show={show} onHide={handleCloseModal} />
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />

      <div class="tab-co">
        <table class="tabl">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Model Name</th>
              <th>Serial No</th>
              <th> Sale Status</th>
            </tr>
          </thead>
          <tbody>
            {/* {Stock &&
                Stock.data.map((Stock) => (
                  <tr key={Stock._id}>
                    <td>{Stock.demail}</td>
                    <td>{Stock.name}</td>
                    <td>{Stock.branch}</td>
                    <td>{Stock.status ? "Active" : "Inactive"}</td>
                    </tr>
                ))} */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Stock;
