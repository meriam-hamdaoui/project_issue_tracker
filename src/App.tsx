import React from "react";
import "./App.css";
import AddIssue from "./components/AddIssue";
import IssueCard from "./components/IssueCard";
import { Container, Typography, Grid, Box } from "@mui/material";

function App() {
  return (
    <Container className="App ">
      <Typography variant="h2">Project Issue Tracker</Typography>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={4}>
          <Grid item xs={4}>
            <AddIssue />
          </Grid>

          <Grid item xs={8}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h4">Issue To Fix</Typography>

              <IssueCard />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default App;
