import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface ArticlesState {
    articles: any[];
    loading: boolean;
    error: string | null;
}

const initialState: ArticlesState = {
    articles: [],
    loading: false,
    error: null,
};

export const fetchArticles = createAsyncThunk('articles/fetchArticles', async () => {
    const baseEndpoint = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8000";
    const response = await fetch(`${baseEndpoint}/news/feed`); 
    return response.json();
});

// Create the Articles Slice
const articlesSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticles.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchArticles.fulfilled, (state, action) => {
                state.loading = false;
                state.articles = action.payload.articles;  
            })
            .addCase(fetchArticles.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch articles';
            });
    },
});

export default articlesSlice.reducer;
