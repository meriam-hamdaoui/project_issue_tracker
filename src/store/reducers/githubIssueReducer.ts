// in this file we'll add an async function to fetch api data to our app:
// let's import the needed package
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IIssue } from "../../Issue.type";

// first lets create the fetch/get data function
// it takes 3 arguments :
// 1 - action type (in our case : githubIssue/fetchIssue)
// 2 - function returns Promise : resolves the value that dispatches the action (in our case : mapping the issues to our ui)
// 3 - An optional argument to deale with the rejected values

// as we are working with typescript we need to specify the types of our data

export const fetchIssues = createAsyncThunk<
  IIssue[],
  void,
  { rejectValue: string }
>("githubIssue/fetchIssue", async (_, thunkAPI) => {
  try {
    // get the data from github fake api
    const response = await fetch(
      "https://api.github.com/repos/github/hub/issues"
    );

    // transform the data to json
    const data = await response.json();

    //return t to the user
    return data.map(
      (issue: { id: string; title: string; body: string; created_at: Date }) =>
        issue
    );
  } catch (error) {
    return thunkAPI.rejectWithValue("failed to fetch issue");
  }
});

// define a fetched issue interface
interface IFetchedIssue {
  issues: IIssue[];
  loading: boolean;
  error: string | null;
}

const initialState: IFetchedIssue = {
  issues: [],
  loading: false,
  error: null,
};

export const githubIssueSlice = createSlice({
  name: "github_issue",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchIssues.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchIssues.fulfilled, (state, action) => {
        state.loading = false;
        state.issues = action.payload;
      })
      .addCase(fetchIssues.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "something went wrong";
      });
  },
});

export default githubIssueSlice.reducer;
