import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Box,
  Button,
} from "@mui/material";
import { IIssue, IssueProps } from "../Issue.type";

type RemoveIssueProps = {
  removeIssue: (issue: IIssue) => void;
};

const IssueCard: React.FC<IssueProps & RemoveIssueProps> = ({
  issue,
  removeIssue,
}) => {
  const handleClick = () => {
    removeIssue(issue);
  };

  return (
    <Card sx={{ height: "200px" }}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
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
              {issue.description || "Issue without discription"}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
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
        </Box>
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
