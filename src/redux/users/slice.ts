import { createSlice } from "@reduxjs/toolkit";
import { IUsersTypes } from "types/users";
import { Loading } from "types/loading";
import { fetchUsers } from "./thunks";

export interface IState {
  users: IUsersTypes[];
  filteredUsers: IUsersTypes[];
  loading: Loading.IDLE | Loading.PENDING | Loading.SUCCEEDED | Loading.FAILED;
  error?: string | null;
  filters: {
    name: string | null;
    username: string | null;
    phone: string | null;
    email: string | null;
  };
}

const initialState: IState = {
  users: [],
  filteredUsers: [],
  loading: Loading.IDLE,
  error: null,
  filters: {
    name: null,
    username: null,
    phone: null,
    email: null,
  },
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setFilters: (state, action) => {
      state.filters = action.payload;
      state.filteredUsers = state.users.filter(
        (user) =>
          user.name.toLowerCase().includes(action.payload.name.toLowerCase()) &&
          user.username
            .toLowerCase()
            .includes(action.payload.username.toLowerCase()) &&
          user.phone.includes(action.payload.phone) &&
          user.email.toLowerCase().includes(action.payload.email.toLowerCase())
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state, _) => {
        state.loading = Loading.PENDING;
      })
      .addCase(fetchUsers.fulfilled, (state, { payload }) => {
        state.loading = Loading.SUCCEEDED;
        state.users = payload as IUsersTypes[];
        state.filteredUsers = payload as IUsersTypes[];
      })
      .addCase(fetchUsers.rejected, (state, { error }) => {
        state.loading = Loading.FAILED;
        state.error = error.message;
      });
  },
});

export default usersSlice;

export const { setFilters } = usersSlice.actions;
