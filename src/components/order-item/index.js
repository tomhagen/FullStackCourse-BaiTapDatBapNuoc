import React, { Component } from "react";

class OrderItem extends Component {
  render() {
    return (
      <div className="content">
        <i class="fa fa-star text-success" />
        <span className="text-success font-weight-bold">{this.props.orderItem.name}</span>
        <p className="text-danger font-weight-bold">Số lượng: {this.props.orderItem.quantity}</p>
      </div>
    );
  }
}
export default OrderItem;
