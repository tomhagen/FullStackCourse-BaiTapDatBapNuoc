import React, { Component } from "react";
import {connect} from 'react-redux';

class OrderResult extends Component {

  renderTotal = () => {
    return (this.props.orderList.reduce((total,item) => {
      return total += item.quantity * item.price
    },0).toLocaleString())
  }
  render() {
    return (
      <div className="order__result">
        <h4 className="text-secondary font-weight-bold">Tổng tiền: {this.renderTotal()}</h4>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    orderList : state.orderList
  }
}
export default connect(mapStateToProps,null) (OrderResult);
