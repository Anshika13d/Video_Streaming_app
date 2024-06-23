//we are using store because we want the user object in every component so whenever we want to use the user we will get it by store

import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
})

/*
Store
-----user
--------currentUser, loading, error
*/ 

