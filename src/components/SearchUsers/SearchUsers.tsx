import { useState, useEffect } from "react";
import { useAppDispatch } from "hooks/useDispatch";
import { setFilters } from "../../redux/users/slice";
import SearchUsersInput from "components/SearchUsersInput/SearchUsersInput";
import { Button } from "@mui/material";

const SearchUsers: React.FC = () => {
  const dispatch = useAppDispatch();

  const [filters, setLocalFilters] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    dispatch(setFilters(filters));
  }, [filters, dispatch]);

  const clearFilters = () => {
    setLocalFilters({
      name: "",
      username: "",
      email: "",
      phone: "",
    });
  };
  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setLocalFilters((prevFilters) => ({
      ...prevFilters,
      [id]: value,
    }));
  };
  return (
    <div className="fixed w-11/12 top-0 left-1/2 transform -translate-x-1/2 max-w-6xl">
      <div className="flex items-stretch justify-between my-8 ">
        <div className="flex w-5/6 justify-between">
          <SearchUsersInput
            id="name"
            handleFilterChange={handleFilterChange}
            label="Search by Name"
            defaultValue={filters.name}
          />
          <SearchUsersInput
            id="username"
            handleFilterChange={handleFilterChange}
            label="Search by Username"
            defaultValue={filters.username}
          />
          <SearchUsersInput
            id="email"
            handleFilterChange={handleFilterChange}
            label="Search by Email"
            defaultValue={filters.email}
          />
          <SearchUsersInput
            id="phone"
            handleFilterChange={handleFilterChange}
            label="Search by Phone"
            defaultValue={filters.phone}
          />
        </div>
        <Button onClick={clearFilters} variant="contained">
          Clear filters
        </Button>
      </div>
    </div>
  );
};

export default SearchUsers;
