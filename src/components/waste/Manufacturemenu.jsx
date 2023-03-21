import React from 'react';

function Manufacturemenu() {
  return (
    <div className="page">
      <div className="image-uploader">
        <input type="file" accept="image/*" />
      </div>
      <div className="button-container">
        <button>Button 1</button>
        <button>Button 2</button>
        <button>Button 3</button>
        <button>Button 4</button>
      </div>
    </div>
  );
}

export default Manufacturemenu;
