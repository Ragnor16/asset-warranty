// import { createStore } from 'redux';
import {configureStore} from '@reduxjs/toolkit'
import authSlice from './auth';
// const initialState = {};

// function rootReducer(state = initialState, action) {
//   switch (action.type) {
//     // Handle different actions here
//     default:
//       return state;
//   }
// }

// const store = createStore(rootReducer);

// export default store;

export const store=configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
})

export default store