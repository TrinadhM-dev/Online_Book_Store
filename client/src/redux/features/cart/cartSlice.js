import { createSlice } from '@reduxjs/toolkit'
// import { useSelector, useDispatch } from 'react-redux'
// import { decrement, increment } from './counterSlice'
import Swal from 'sweetalert2'

const initialState = {
  cartItems:[],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState : initialState,
  reducers: {
    addToCart: (state,action) => {
        const existingItem = state.cartItems.find(item => item._id === action.payload._id)
        if(!existingItem) {
            state.cartItems.push(action.payload)
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your Item is added into Cart",
                showConfirmButton: false,
                timer: 1500
              });
        }
        else {
            Swal.fire({
              title: "Item already exists",
              icon: "warning",
              confirmButtonColor: "#3085d6",
            })
        }
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {addToCart } = cartSlice.actions

export default cartSlice.reducer