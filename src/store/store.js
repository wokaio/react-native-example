import { configureStore } from '@reduxjs/toolkit';
import CartReducer, { REDUCER_NAME as CART_REDUCER_NAME } from './CartReducer';
import TestReducer, { REDUCER_NAME as TEST_REDUCER_NAME } from './TestReducer';

const rootReducers = {
  [CART_REDUCER_NAME]: CartReducer,
  [TEST_REDUCER_NAME]: TestReducer,
};

const store = configureStore({
  reducer: rootReducers,
});

export default store;