import { createSlice } from '@reduxjs/toolkit';

export const REDUCER_NAME = 'test';

const TestSlice = createSlice({
  name: REDUCER_NAME,
  initialState: {
    count: 1,
  },
  reducers: {
    setCount(state, action) {
      state.count = action.payload;
    },
  }
});

export const TestSelectors = {
  getCount: (state) => state[REDUCER_NAME].count,
};

export const { setCount } = TestSlice.actions;
export default TestSlice.reducer;