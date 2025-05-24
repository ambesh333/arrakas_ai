import { configureStore } from '@reduxjs/toolkit';
import chatReducer from './chatSlice';
import roiReducer from './ROISlice';
import articlesReducer from './ArticleSlice';
import navReducer from './navToggle';
import authSlice from './authSlice';

export const store = configureStore({
  reducer: {
    chat: chatReducer,
    roi: roiReducer,
    articles: articlesReducer,
    nav: navReducer,
    auth: authSlice,    
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
