import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
  auth: boolean;
}

const initialState: AuthState = {
  auth: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setSigned: (state) => {
      state.auth = true;
    },
    resetSigned: (state) => {
      state.auth = false;
    },
  },
});

export const { setSigned, resetSigned } = authSlice.actions;
export default authSlice.reducer;
