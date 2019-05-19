import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
          <div className="container">
            <div className="header">
              <h5>Bắp rang</h5>
            </div>
            <div className="item d-flex">
              <img
                style={{ width: "80px", height: "80px" }}
                alt="baprang"
                src="./img/Baprang-60z.jpeg"
              />
              <div className="content">
                <p className="text-success font-weight-bold">Bắp rang 60z - Phô mai</p>
                
                <p className="text-info font-weight-bold">55.000đ</p>
              </div>
              <div className="control ">
                <button className="btn btn-info">
                  <i class="fa fa-minus" />
                </button>
                <span class="badge badge-pill badge-danger">10</span>
                <button className="btn btn-info">
                  <i class="fa fa-plus" />
                </button>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="header">
              <h5>Combo Tết</h5>
            </div>
            <div className="item d-flex">
              <img
                style={{ width: "80px", height: "80px" }}
                alt="baprang"
                src="./img/Baprang-60z.jpeg"
              />
              <div className="content">
                <p className="text-success font-weight-bold">Bắp rang 60z - Phô mai</p>
                
                <p className="text-info font-weight-bold">55.000đ</p>
              </div>
              <div className="control ">
                <button className="btn btn-info">
                  <i class="fa fa-minus" />
                </button>
                <span class="badge badge-pill badge-danger">10</span>
                <button className="btn btn-info">
                  <i class="fa fa-plus" />
                </button>
              </div>
            </div>
            
          </div>
          <div className="container">
            <div className="header">
              <h5>Nước Ngọt Ly</h5>
            </div>
            <div className="item d-flex">
              <img
                style={{ width: "80px", height: "80px" }}
                alt="baprang"
                src="./img/Baprang-60z.jpeg"
              />
              <div className="content">
                <p className="text-success font-weight-bold">Bắp rang 60z - Phô mai</p>
                
                <p className="text-info font-weight-bold">55.000đ</p>
              </div>
              <div className="control ">
                <button className="btn btn-info">
                  <i class="fa fa-minus" />
                </button>
                <span class="badge badge-pill badge-danger">10</span>
                <button className="btn btn-info">
                  <i class="fa fa-plus" />
                </button>
              </div>
            </div>
            
          </div>
        </div>
        <div className="col-md-6">
              <div className="container result">
                <div className="order__header">
                  <h3 className="font-weight-bold text-center text-info">Thông tin Order</h3>
                </div>
                <div className="content">
                  <i class="fa fa-star text-success"></i>
                  <span className="text-success font-weight-bold">Bắp nước combo 1</span>
                  <p className="text-danger font-weight-bold">Số lượng: 1</p>
                </div>
                <div className="order__result">
                  <h4 className="text-secondary font-weight-bold">Tổng tiền: 300,000</h4>
                </div>
              </div>
        </div>
      </div>
    </div>
  );
}

export default App;
