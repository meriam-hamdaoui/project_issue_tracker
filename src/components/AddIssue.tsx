import React from "react";
import {
  Button,
  Typography,
  Box,
  Stack,
  TextField,
  MenuItem,
} from "@mui/material";
export default function AddIssue() {
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
}
