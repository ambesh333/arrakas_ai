import { configureStore } from '@reduxjs/toolkit';
import chatReducer from './chatSlice';
import roiReducer from './ROISlice';
import articlesReducer from './ArticleSlice';

export const store = configureStore({
  reducer: {
    chat: chatReducer,
    roi: roiReducer,
    articles: articlesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
