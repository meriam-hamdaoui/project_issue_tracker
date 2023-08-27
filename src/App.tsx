import React, { useEffect } from "react";
import "./App.css";
import AddIssue from "./components/AddIssue";
import IssueCard from "./components/IssueCard";
import { Container, Typography, Grid, Box } from "@mui/material";
import { useSelector } from "react-redux";
import { IIssue } from "./Issue.type";
import { AppDispatch, RootState, useAppDispatch, issueAction } from "./store";
import { fetchIssues } from "./store/reducers/githubIssueReducer";
import { bindActionCreators } from "@reduxjs/toolkit";

function App() {
  const dispatch: AppDispatch = useAppDispatch();

  // const issueList = useSelector(
  //   (state: RootState) => state.issues.projectIssuess
  // );

  const githubIssueList = useSelector(
    (state: RootState) => state.githubIssues.issues
  );

  const loading = useSelector((state: RootState) => state.githubIssues.loading);
  const error = useSelector((state: RootState) => state.githubIssues.error);

  const { addIssue, removeIssue } = bindActionCreators(issueAction, dispatch);

  useEffect(() => {
    dispatch(fetchIssues());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

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
              {githubIssueList?.map((issue: IIssue) => (
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
