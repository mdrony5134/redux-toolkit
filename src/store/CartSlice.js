import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const  CartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: JSON.parse(localStorage.getItem("cart")) || []
    },
    reducers:{
        Add_To_Cart: (state, action) =>{
        const item = state.cart.find((i)=>i.id === action.payload.id)
        if(item){
            item.quantity += 1
            toast.info("Increase product quantity",{
                position: "top-left",
            })
        }else{
            state.cart.push({...action.payload, quantity:1})
            toast.success("Added a new product",{
                position:"top-left"
            })
        }

        localStorage.setItem("cart", JSON.stringify(state.cart))
           
        },
        Remove_To_Cart: (state,action) =>{
             state.cart = state.cart.filter((i)=>i.id !== action.payload)
        },
        Set_Product_Rating: (state, action) => {
            const { id, rating } = action.payload;
            const product = state.cart.find((item) => item.id === id);
            if (product) {
              product.rating = rating;
              localStorage.setItem("cart", JSON.stringify(state.cart));
            }
        }    
    }
})

export const {Add_To_Cart, Remove_To_Cart, Set_Product_Rating} = CartSlice.actions
export default CartSlice.reducer