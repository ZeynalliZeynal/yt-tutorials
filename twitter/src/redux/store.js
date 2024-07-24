import { configureStore } from '@reduxjs/toolkit';
import auth from '@/redux/auth/index.js';

const store = configureStore({
  reducer: {
    auth,
  },
});

export default store;
