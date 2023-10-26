import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
    name: "product",
    initialState:[],
    reducers:{
        Product_Insert: (state, action) =>
        {
           state = action.payload.map((product)=>{
                return{
                    ...product,
                    rating:[]
                }
            })
            return state;
        },
        Product_Update: (state, action) =>{
            const {id, rating} = action
            state = state.map(product=>{
                if(product.id === id)
                    return{...product, rating:[...product.rating, rating]}
                    return product
            })
            return state;
        }
    }
})

export const {Product_Insert, Product_Update} = ProductSlice.actions
export default ProductSlice.reducer