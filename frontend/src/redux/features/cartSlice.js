import { createSlice } from "@reduxjs/toolkit";
import  Swal  from "sweetalert2";


const initialState = {
    cartItems: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers:{
        addToCart: (state, action) => {
            const existingItem = state.cartItems.find(item => item._id === action.payload._id);
            if(!existingItem) {
                state.cartItems.push(action.payload)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Item added to cart",
                    showConfirmButton: false,
                    timer: 1500,
                    });
            } else{
                Swal.fire({
                    position: "top-end",
                    icon: "info",
                    title: "Item already added to cart",
                    showConfirmButton: false,
                    timer: 1000,
                    });
            }
        },
        
    }
})

// export the actions   
export const {addToCart} =cartSlice.actions;
export default cartSlice.reducer; 