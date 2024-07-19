import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.card.info.id === action.payload.card.info.id
      );
      if (itemIndex >= 0) {
        state.items[itemIndex].quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.card.info.id === action.payload.card.info.id
      );
      if (itemIndex >= 0) {
        state.items[itemIndex].quantity -= 1;
        if (state.items[itemIndex].quantity === 0) {
          state.items.splice(itemIndex, 1);
        }
      }
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItems, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
