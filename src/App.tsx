import React from "react";
import "./App.css";
import AddIssue from "./components/AddIssue";
import IssueCard from "./components/IssueCard";
import { Container, Typography, Grid, Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { IIssue } from "./store/slices/interfaces";
import { RootState } from "./store";
import { issueAction } from "./store";
import { bindActionCreators } from "@reduxjs/toolkit";

function App() {
  const issueList = useSelector(
    (state: RootState) => state.issues.projectIssuess
  );

  const dispatch = useDispatch();

  const { addIssue, removeIssue } = bindActionCreators(issueAction, dispatch);

  return (
    <Container className="App ">
      <Typography variant="h2">Project Issue Tracker</Typography>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={4}>
          <Grid item xs={4}>
            <AddIssue addIssue={addIssue} />
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
              {issueList.map((issue: IIssue) => (
                <IssueCard
                  key={issue.id}
                  issue={issue}
                  removeIssue={removeIssue}
                />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default App;
