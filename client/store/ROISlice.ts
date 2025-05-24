import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface RoiState {
    apiData: any[];
    loading: boolean;
    error: string | null;
}

const initialState: RoiState = {
    apiData: [],
    loading: false,
    error: null,
};

export const fetchRoiData = createAsyncThunk('roi/fetchRoiData', async () => {
    const baseEndpoint = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8000";
    const response = await fetch(`${baseEndpoint}/roi`);
    return response.json();
});

const roiSlice = createSlice({
    name: 'roi',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRoiData.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchRoiData.fulfilled, (state, action) => {
                state.loading = false;
                state.apiData = action.payload.data;  
            })
            .addCase(fetchRoiData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch ROI data';
            });
    },
});

export default roiSlice.reducer;
