import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  signed: boolean;
  signature: string | null;
}

const initialState: AuthState = {
  signed: false,
  signature: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setSigned: (state, action: PayloadAction<string>) => {
      state.signed = true;
      state.signature = action.payload;
    },
    resetSigned: (state) => {
      state.signed = false;
      state.signature = null;
    },
  },
});

export const { setSigned, resetSigned } = authSlice.actions;
export default authSlice.reducer;
