import { ADD_TO_ORDER, REMOVE_FROM_ORDER } from "../constants";

const initialState = [];

const OrderReducer  = (state = initialState , action) => {
   switch(action.type){
        case ADD_TO_ORDER:
            const index = state.findIndex(item => item.id === action.payload.item.id);
            if(index !== -1){
                state[index].quantity += action.payload.quantity;
                console.log(action.payload.quantity);
            }
            else{
                let item = {...action.payload.item , quantity: 1}
                state.push(item);
            }
            
            return [...state]
        case REMOVE_FROM_ORDER:
            const index2 = state.findIndex(item => item.id === action.payload.id);
            if(index2 !== -1){
                if(state[index2].quantity > 1){
                    state[index2].quantity -= 1;
                }
                else{
                    state.splice(index2,1);
                }
                return [...state];
            }
       default : return [...state];
   }
}
export default OrderReducer