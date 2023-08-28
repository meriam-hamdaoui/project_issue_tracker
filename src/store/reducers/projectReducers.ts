// file for all action, fetch - add - remove issues
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export interface Issue {
  id: string | number;
  title: string;
  body: string;
  created_at: Date;
}

interface IssueState {
  issues: Issue[];
  loading: boolean;
  error: string | null;
}

const initialState: IssueState = {
  loading: false,
  error: null,
  issues: [
    {
      id: nanoid(),
      title: "issue one",
      body: "issue one",
      created_at: new Date(),
    },
    {
      id: nanoid(),
      title: "issue two",
      body: "issue two",
      created_at: new Date(),
    },
  ],
};

export const fetchProjectIssues = createAsyncThunk(
  "githubIssue/fetchIssue",
  async (_, thunkAPI) => {
    try {
      // get the data from github fake api
      const response = await fetch(
        "https://api.github.com/repos/github/hub/issues"
      );

      // transform the data to json
      const data = await response.json();

      //return t to the user
      return data.map(
        (issue: {
          id: string;
          title: string;
          body: string;
          created_at: Date;
        }) => issue
      );
    } catch (error) {
      return thunkAPI.rejectWithValue("failed to fetch issue");
    }
  }
);

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    addProjectIssue: (state, action: PayloadAction<Issue>) => {
      return {
        ...state,
        issues: [...state.issues, action.payload],
      };
    },
    removePojectIssue: (state, action: PayloadAction<Issue>) => {
      return {
        ...state,
        issues: state.issues.filter((issue) => issue.id !== action.payload.id),
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjectIssues.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProjectIssues.fulfilled, (state, action) => {
        state.loading = false;
        state.issues = action.payload;
      })
      .addCase(fetchProjectIssues.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "something went wrong";
      });
  },
});

export const { addProjectIssue, removePojectIssue } = projectSlice.actions;
export default projectSlice.reducer;
