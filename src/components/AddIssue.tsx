import { useState } from "react";
import {
  Button,
  Typography,
  Box,
  Stack,
  TextField,
  // MenuItem,
} from "@mui/material";
// import { IIssue } from "../Issue.type";
import { Issue } from "../store/reducers/projectReducers";
import { makeStyles } from "@mui/styles";

type AddIssueProps = {
  addIssue: (issue: Issue) => void;
};

type EventType = React.ChangeEvent<HTMLInputElement> &
  React.ChangeEvent<HTMLTextAreaElement> &
  React.ChangeEvent<HTMLSelectElement>;

const useStyles = makeStyles((theme) => ({
  customTextField: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "blue", // Change border color on hover
        background: "rgb(111, 108, 108)",
        color: "white !important",
      },
      // "&:hover fieldset": {
      //   borderColor: "green", // Change border color
      // },
    },
  },
}));

const AddIssue: React.FC<AddIssueProps> = ({ addIssue }) => {
  const classes = useStyles();

  const [newIssue, setNewIssue] = useState<Issue>({} as Issue);

  const handleChange = (e: EventType) => {
    setNewIssue({
      ...newIssue,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newIssue.title) {
      alert("Please give a Title and Periority to the new Issue");
      return;
    }
    addIssue(newIssue);
  };

  return (
    <Box sx={{ display: "flex", color: "white" }}>
      <Stack spacing={2}>
        <Typography variant="h4">Add New Issue</Typography>
        <TextField
          className={classes.customTextField}
          id="outlined-basic"
          label="Title"
          variant="outlined"
          name="title"
          onChange={handleChange}
          helperText="Please enter a Title"
        />
        <TextField
          className={classes.customTextField}
          id="outlined-basic"
          label="Description"
          variant="outlined"
          multiline
          rows={4}
          name="body"
          onChange={handleChange}
        />
        {/* <TextField
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
        </TextField> */}
        <Button variant="contained" onClick={handleClick}>
          Submit
        </Button>
      </Stack>
    </Box>
  );
};

export default AddIssue;
