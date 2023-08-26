import { IIssue, IProject } from "./interfaces";
import { nanoid } from "nanoid";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IProject = {
  projectIssuess: [
    {
      id: nanoid(),
      title: "issue one",
      description: "issue one",
      openedAt: "issue one",
      periority: "medium",
    },
    {
      id: nanoid(),
      title: "issue two",
      description: "issue two",
      openedAt: "issue two",
      periority: "high",
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
    removeIssue: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        projectIssuess: state.projectIssuess.filter(
          (issue) => issue.id !== action.payload
        ),
      };
    },
  },
});

export const { addIssue, removeIssue } = issueSlice.actions;
export default issueSlice.reducer;
