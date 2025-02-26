import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';


export interface CounterState {
  value: "BIO" | "ORG";
}

const initialState: CounterState = {
  value: "BIO",
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState, 
  reducers: {
    setModalValue: (state, action: PayloadAction<"BIO" | "ORG">) => {
      state.value = action.payload;
    },
  },
});

export const { setModalValue } = modalSlice.actions;

export default modalSlice.reducer;
