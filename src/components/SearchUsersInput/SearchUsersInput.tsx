import { TextField } from "@mui/material";
import { ChangeEvent, useState, useMemo } from "react";

interface SearchUsersInputT {
  id: string;
  handleFilterChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  defaultValue: string;
}

const SearchUsersInput: React.FC<SearchUsersInputT> = ({
  id,
  handleFilterChange,
  label,
  defaultValue,
}) => {
  const [textValue, setTextValue] = useState(defaultValue);

  useMemo(() => {
    setTextValue(defaultValue);
  }, [defaultValue]);

  return (
    <TextField
      size="small"
      id={id}
      label={label}
      variant="outlined"
      value={textValue}
      onChange={handleFilterChange}
    />
  );
};

export default SearchUsersInput;
