import React from "react";
import {
  Button,
  Typography,
  Box,
  Stack,
  TextField,
  MenuItem,
} from "@mui/material";
import { IIssue } from "../store/slices/interfaces";

type AddIssueProps = {
  addIssue: (issue: IIssue) => void;
};

const AddIssue = ({ addIssue }: AddIssueProps) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Stack spacing={2}>
        <Typography variant="h4">Add New Issue</Typography>
        <TextField id="outlined-basic" label="Title" variant="outlined" />
        <TextField
          id="outlined-basic"
          label="Description"
          variant="outlined"
          multiline
          rows={4}
        />
        <TextField
          id="outlined-select-currency"
          select
          label="Periority"
          defaultValue="medium"
          variant="outlined"
        >
          <MenuItem value="high">High</MenuItem>
          <MenuItem value="medium">Medium</MenuItem>
          <MenuItem value="low">Low</MenuItem>
        </TextField>
        <Button variant="contained">Submit</Button>
      </Stack>
    </Box>
  );
};

export default AddIssue;
