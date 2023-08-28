import { combineReducers } from "@reduxjs/toolkit";
import issueSlice from "./issueReducer";
import githubIssueSlice from "./githubIssueReducer";
import projectSlice from "./projectReducers";

const rootReducers = combineReducers({
  issues: issueSlice,
  githubIssues: githubIssueSlice,
  project: projectSlice,
});

export default rootReducers;
