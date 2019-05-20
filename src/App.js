import React from "react";
import "./App.css";
import BapRang from './components/bap-rang';
import ComboTet from './components/combo-tet';
import NuocNgot from './components/nuoc-ngot';
import Order from './components/order';

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
          <div className="container">
            <div className="header">
              <h5>Bắp rang</h5>
            </div>
            <BapRang/>
          </div>
          <div className="container">
            <div className="header">
              <h5>Combo Tết</h5>
            </div>
            <ComboTet/>
            
          </div>
          <div className="container">
            <div className="header">
              <h5>Nước Ngọt Ly</h5>
            </div>
            
            <NuocNgot/>
          </div>
        </div>
        <div className="col-md-6">
              <div className="container result">
              <Order/>
              </div>
        </div>
      </div>
    </div>
  );
}

export default App;
