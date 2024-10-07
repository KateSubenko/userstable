import { configureStore, combineReducers } from "@reduxjs/toolkit";
import usersSlice from "./users/slice";

const rootReducer = combineReducers({
  users: usersSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
