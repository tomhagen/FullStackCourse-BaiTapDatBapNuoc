import React, { Component, Fragment } from "react";
import OrderItem from '../order-item';
import OrderResult from '../order-result';

class Order extends Component {
  render() {
    return (
      <Fragment>
        <div className="order__header">
          <h3 className="font-weight-bold text-center text-info">
            Thông tin Order
          </h3>
        </div>
        <OrderItem/>
        <OrderResult/>
      </Fragment>
    );
  }
}
export default Order;
