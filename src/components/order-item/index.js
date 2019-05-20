import React, { Component } from "react";

class OrderItem extends Component {
  render() {
    return (
      <div className="content">
        <i class="fa fa-star text-success" />
        <span className="text-success font-weight-bold">Bắp nước combo 1</span>
        <p className="text-danger font-weight-bold">Số lượng: 1</p>
      </div>
    );
  }
}
export default OrderItem;
