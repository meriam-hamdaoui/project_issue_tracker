import React, { useEffect } from "react";
import "./App.css";
import AddIssue from "./components/AddIssue";
import IssueCard from "./components/IssueCard";
import { Container, Typography, Grid, Box } from "@mui/material";
import { useSelector } from "react-redux";
import { AppDispatch, RootState, useAppDispatch } from "./store";
import { fetchIssues } from "./store/reducers/githubIssueReducer";
import { projectActions } from "./store";
import { Issue } from "./store/reducers/projectReducers";

function App() {
  const dispatch: AppDispatch = useAppDispatch();

  const projectIssueList = useSelector(
    (state: RootState) => state.project.issues
  );
  const loading = useSelector((state: RootState) => state.project.loading);
  const error = useSelector((state: RootState) => state.project.error);

  const deleteIssue = (issue: Issue) =>
    dispatch(projectActions.addProjectIssue(issue));

  const addIssueProj = (issue: Issue) =>
    dispatch(projectActions.addProjectIssue(issue));

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
            <AddIssue addIssue={addIssueProj} />
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
              {projectIssueList?.map((issue: Issue, index) => (
                <IssueCard
                  key={index}
                  issue={issue}
                  removeIssue={deleteIssue}
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
