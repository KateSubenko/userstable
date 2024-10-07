import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { IUsersTypes } from "types/users";

interface UserProps {
  user: IUsersTypes;
}

const TableUserBody: React.FC<UserProps> = ({ user }) => {
  return (
    <TableRow
      key={user.name}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell component="th" scope="row">
        {user.name}
      </TableCell>
      <TableCell align="right">{user.name}</TableCell>
      <TableCell align="right">{user.username}</TableCell>
      <TableCell align="right">{user.email}</TableCell>
      <TableCell align="right">{user.phone}</TableCell>
    </TableRow>
  );
};

export default TableUserBody;
