import { createSlice } from "@reduxjs/toolkit";
import { IUsersTypes } from "types/users";
import { Loading } from "types/loading";
import { fetchUsers } from "./thunks";

export interface IState {
  users: IUsersTypes[];
  filteredUsers: IUsersTypes[];
  loading: Loading;
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
      const { name, username, phone, email } = action.payload;
      state.filters = action.payload;
      state.filteredUsers = state.users.filter((user) => {
        const matchesName = name
          ? user.name.toLowerCase().includes(name.toLowerCase())
          : true;
        const matchesUsername = username
          ? user.username.toLowerCase().includes(username.toLowerCase())
          : true;
        const matchesPhone = phone ? user.phone.includes(phone) : true;
        const matchesEmail = email
          ? user.email.toLowerCase().includes(email.toLowerCase())
          : true;

        return matchesName && matchesUsername && matchesPhone && matchesEmail;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = Loading.PENDING;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, { payload }) => {
        state.loading = Loading.SUCCEEDED;
        state.users = payload;
        state.filteredUsers = payload;
      })
      .addCase(fetchUsers.rejected, (state, { payload }) => {
        state.loading = Loading.FAILED;
        state.error = payload as string;
      });
  },
});

export default usersSlice;

export const { setFilters } = usersSlice.actions;
