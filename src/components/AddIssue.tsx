import { useState } from "react";
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

type EventType = React.ChangeEvent<HTMLInputElement> &
  React.ChangeEvent<HTMLTextAreaElement> &
  React.ChangeEvent<HTMLSelectElement>;

const AddIssue: React.FC<AddIssueProps> = ({ addIssue }) => {
  const [newIssue, setNewIssue] = useState<IIssue>({} as IIssue);

  const handleChange = (e: EventType) => {
    setNewIssue({
      ...newIssue,
      [e.target.name]: e.target.value,
      openedAt: new Date(),
    });
  };

  const handleClick = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newIssue.title || !newIssue.periority) {
      alert("Please give a Title and Periority to the new Issue");
    }
    addIssue(newIssue);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Stack spacing={2}>
        <Typography variant="h4">Add New Issue</Typography>
        <TextField
          id="outlined-basic"
          label="Title"
          variant="outlined"
          name="title"
          onChange={handleChange}
        />
        <TextField
          id="outlined-basic"
          label="Description"
          variant="outlined"
          multiline
          rows={4}
          name="description"
          onChange={handleChange}
        />
        <TextField
          id="outlined-select-currency"
          select
          label="Periority"
          defaultValue=""
          variant="outlined"
          name="periority"
          onChange={handleChange}
        >
          <MenuItem value="high">High</MenuItem>
          <MenuItem value="medium">Medium</MenuItem>
          <MenuItem value="low">Low</MenuItem>
        </TextField>
        <Button variant="contained" onClick={handleClick}>
          Submit
        </Button>
      </Stack>
    </Box>
  );
};

export default AddIssue;
