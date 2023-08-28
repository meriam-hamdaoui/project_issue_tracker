// reducer file to test add and remove action befor fetching
import { IIssue, IProject } from "../../Issue.type";
import { nanoid } from "nanoid";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// const today = new Date();

const initialState: IProject = {
  projectIssuess: [
    {
      id: nanoid(),
      title: "issue one",
      body: "issue one",
      // openedAt: new Date(
      //   `${today.getFullYear()}-${today.getMonth()}-${today.getDate() - 1}`
      // ),
      // periority: "medium",
    },
    {
      id: nanoid(),
      title: "issue two",
      body: "issue two",
      // openedAt: new Date(
      //   `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`
      // ),
      // periority: "high",
    },
  ],
};

const issueSlice = createSlice({
  name: "issue",
  initialState,
  reducers: {
    addIssue: (state, action: PayloadAction<IIssue>) => {
      return {
        ...state,
        projectIssuess: [...state.projectIssuess, action.payload],
      };
    },
    removeIssue: (state, action: PayloadAction<IIssue>) => {
      return {
        ...state,
        projectIssuess: state.projectIssuess.filter(
          (issue) => issue.id !== action.payload.id
        ),
      };
    },
  },
});

export const { addIssue, removeIssue } = issueSlice.actions;
export default issueSlice.reducer;
