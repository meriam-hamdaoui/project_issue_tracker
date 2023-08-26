import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Box,
  Button,
} from "@mui/material";
import { IIssue, IssueProps } from "../store/slices/interfaces";

type RemoveIssueProps = {
  removeIssue: (issue: IIssue) => void;
};

type IssueCardProps = IssueProps & RemoveIssueProps;

const IssueCard: React.FC<IssueCardProps> = ({ issue, removeIssue }) => {
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
              {issue.description}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <Box>
            <Typography gutterBottom variant="h6" component="div">
              Opned :
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {issue.openedAt}
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
        <Button size="small">remove</Button>
      </CardActions>
    </Card>
  );
};
export default IssueCard;
