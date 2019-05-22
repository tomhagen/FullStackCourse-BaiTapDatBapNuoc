import {combineReducers} from 'redux';
import ItemReducer from './item-reducers';
import OrderReducer from './order-reducer';

const rootReducer = combineReducers({
    itemList : ItemReducer,
    orderList : OrderReducer
});

export default rootReducer