import React from "react";
import "./App.css";
import Order from './components/order';
import ItemList from './components/item-list';

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
          <ItemList/>
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
