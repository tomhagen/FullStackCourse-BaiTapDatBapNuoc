import React, { Component, Fragment } from "react";
import Item from '../item';
import {connect} from 'react-redux';

class ItemList extends Component {

    renderItemList = (title) => {
        return this.renderData(title).map((item,index) => {
            return <Item item={item} key={index}/>
        })
    }
    renderData = (title) => {
        return this.props.itemList.filter(item => {
            if(item.title === title){
                return true
                }  
            }
        )
    }
  render() {
    return (
      <Fragment>
        <div className="container">
          <div className="header">
            <h5>Bắp rang</h5>
          </div>
          {this.renderItemList("Bắp Rang")}
        </div>
        <div className="container">
          <div className="header">
            <h5>Combo Tết</h5>
          </div>
          {this.renderItemList("Combo Tết")}
        </div>
        <div className="container">
          <div className="header">
            <h5>Nước Ngọt Ly</h5>
          </div>

         {this.renderItemList("Nước Ngọt")}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        itemList : state.itemList
    }
}
export default connect(mapStateToProps,null) (ItemList);