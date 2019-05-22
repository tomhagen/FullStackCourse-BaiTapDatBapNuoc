import React, { Component } from "react";
import {connect} from 'react-redux';
import { actAddToOrder, actRemoveFromOrder } from "../../redux/actions";

class Item extends Component {

    addToOrder = (item) => {
        this.props.onAddToOrder(item);
    }
    removeFromOrder = (item) => {
        this.props.onRemoveFromOrder(item);
    }

  render() {
    let { name, img, price, title } = this.props.item;

    return (
      <div className="item">
        <div className="row">
          <div className="col-md-3">
            <img
              style={{ width: "80px", height: "80px" }}
              alt="baprang"
              src={img}
            />
          </div>
          <div className="col-md-6">
            <div className="content">
              <p className="text-success font-weight-bold">{name}</p>
              <p className="text-info font-weight-bold">{price}.000</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="control d-flex">
              <button className="btn btn-info" onClick={() => this.removeFromOrder(this.props.item)}>
                <i class="fa fa-minus" />
              </button>
              <span class="badge badge-pill badge-danger">10</span>
              <button className="btn btn-info"  onClick={() => this.addToOrder(this.props.item)}>
                <i class="fa fa-plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddToOrder: (item) => {
            dispatch(actAddToOrder(item,1));
        },
        onRemoveFromOrder: (item) => {
            dispatch(actRemoveFromOrder(item));
        }
    }
}
export default connect(null, mapDispatchToProps) (Item);
