import CartApi from '@/api/CartApi';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const REDUCER_NAME = 'cart';

const addItemToCart = createAsyncThunk(`${REDUCER_NAME}/addItemToCart`, async (payload) => {
  const resData = await (await CartApi.addItemToCart()).data;
  return resData;
});

const CartSlice = createSlice({
  name: REDUCER_NAME,
  initialState: {
    totalQuantity: 1,
  },
  reducers: {
    setCartTotalQuantity(state, action) {
      state.totalQuantity = action.payload;
    },
  },
  extraReducers: {
    [addItemToCart.fulfilled]: (state)  => {
      state.totalQuantity++;
    },
  }
});

export const CartSelectors = {
  getTotalQuantity: (state) => state[REDUCER_NAME].totalQuantity,
};

export const CartActions = {
  ...CartSlice.actions,
  addItemToCart,
};

export default CartSlice.reducer;