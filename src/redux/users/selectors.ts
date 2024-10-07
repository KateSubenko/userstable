import { RootState } from "redux/store";

export const getUsers = (state: RootState) => {
  return state.users.users;
};

export const getFilteredUsers = (state: RootState) => {
  return state.users.filteredUsers;
};
