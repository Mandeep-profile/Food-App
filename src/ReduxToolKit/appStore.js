import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '.././ReduxToolKit/cartSlice'

const appStore = configureStore({
    reducer : {
        cart: cartReducer
    }
})

export default appStore;