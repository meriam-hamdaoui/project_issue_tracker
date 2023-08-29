import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Box,
  Button,
} from "@mui/material";
import { Issue } from "../store/reducers/projectReducers";
import DescribeIssue from "./DescribeIssue";

type RemoveIssueProps = {
  issue: Issue;
  removeIssue: (issue: Issue) => void;
};

const IssueCard: React.FC<RemoveIssueProps> = ({ issue, removeIssue }) => {
  const handleClick = () => {
    removeIssue(issue);
  };

  return (
    <Card sx={{ marginBottom: "20px", textAlign: "left" }}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <Box>
            <Typography gutterBottom variant="h5" component="div">
              Issue Title :
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {issue.title}
            </Typography>
          </Box>
          <Box>
            <Typography gutterBottom variant="h5" component="div">
              Issue Description :
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <DescribeIssue longText={issue.body || "no description"} />
            </Typography>
          </Box>
        </Box>
        {/* <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <Box>
            <Typography gutterBottom variant="h6" component="div">
              Opened At:
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {issue.openedAt.toDateString()}
            </Typography>
          </Box>
          <Box>
            <Typography gutterBottom variant="h6" component="div">
              Periority :
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {issue.periority}
            </Typography>
          </Box>
        </Box> */}
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleClick}>
          remove
        </Button>
      </CardActions>
    </Card>
  );
};
export default IssueCard;
