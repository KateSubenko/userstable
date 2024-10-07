import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUsersTypes } from "types/users";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data: IUsersTypes[] = await response.json();
      return data;
    } catch (error) {
      const errorT = error as string;
      return rejectWithValue(errorT);
    }
  }
);
