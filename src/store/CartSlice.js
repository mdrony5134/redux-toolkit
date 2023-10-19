import { createSlice } from "@reduxjs/toolkit";

const  CartSlice = createSlice({
    name: "cart",
    initialState: {
        cart:[]
    },
    reducers:{
        Add_To_Cart: (state, action) =>{
        const item = state.cart.find((i)=>i.id === action.payload.id)
        if(item){
            item.quantity += 1
        }else{
            state.cart.push({...action.payload, quantity:1})
        }
           
        },
        Remove_To_Cart: (state,action) =>{
             state.cart = state.cart.filter((i)=>i.id !== action.payload)
        }
    }
})

export const {Add_To_Cart, Remove_To_Cart} = CartSlice.actions
export default CartSlice.reducer