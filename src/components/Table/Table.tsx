import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/useDispatch";
import { useSelector } from "react-redux";
import { fetchUsers } from "../../redux/users/thunks";
import { getFilteredUsers, getUsers } from "../../redux/users/selectors";
import { RootState } from "types/users";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableUserBody from "components/TableBody/TableUserBody";
import { Typography } from "@mui/material";
import Loader from "components/Loader/Loader";

const UsersTable: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const filteredUsers = useSelector((state: RootState) =>
    getFilteredUsers(state)
  );
  const users = useSelector((state: RootState) => getUsers(state));
  return (
    <TableContainer
      component={Paper}
      className="mt-28 max-h-[calc(100vh-180px)] overflow-auto">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className="bg-sky-100 sticky top-0 z-10">
          <TableRow>
            <TableCell sx={{ fontWeight: "bold", fontSize: "1.2rem" }}>
              Users
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="right">
              name
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="right">
              username
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="right">
              email
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="right">
              phone
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody className="max-h-[calc(100vh-230px)] overflow-y-auto">
          {users.length === 0 ? (
            <TableRow>
              <TableCell colSpan={5} align="center">
                <Typography variant="h6" align="center" className="mt-4">
                  <Loader />
                </Typography>
              </TableCell>
            </TableRow>
          ) : (
            filteredUsers.map((user) => (
              <>
                <TableUserBody key={user.id} user={user} />
              </>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UsersTable;
