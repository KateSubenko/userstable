import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import "./App.css";
import UsersTable from "components/Table/Table";
import SearchUsers from "components/SearchUsers/SearchUsers";

const App = (): JSX.Element => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <SearchUsers />
        <UsersTable />
      </Container>
    </React.Fragment>
  );
};

export default App;
