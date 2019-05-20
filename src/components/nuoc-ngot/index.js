import React, { Component } from "react";

class NuocNgot extends Component {
  render() {
    return (
      <div className="item d-flex">
        <img
          style={{ width: "80px", height: "80px" }}
          alt="baprang"
          src="./img/Baprang-60z.jpeg"
        />
        <div className="content">
          <p className="text-success font-weight-bold">
            Bắp rang 60z - Phô mai
          </p>

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
    );
  }
}
export default NuocNgot;
