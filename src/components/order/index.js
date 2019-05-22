import React, { Component, Fragment } from "react";
import OrderItem from '../order-item';
import OrderResult from '../order-result';
import {connect} from 'react-redux';

class Order extends Component {

  renderOrderItem = () => {
    return this.props.orderList.map((orderItem,index) => {
      return <OrderItem orderItem = {orderItem} key={index} />
    })
  }
  render() {
    return (
      <Fragment>
        <div className="order__header">
          <h3 className="font-weight-bold text-center text-info">
            Thông tin Order
          </h3>
        </div>
        {this.renderOrderItem()}
        <OrderResult/>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    orderList: state.orderList
  }
}
export default connect(mapStateToProps,null) (Order);
