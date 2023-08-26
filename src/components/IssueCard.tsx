import React from "react";
import { Card, CardActions, CardContent, Typography, Box } from "@mui/material";
export default function IssueCard() {
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
              Title 1
            </Typography>
          </Box>
          <Box>
            <Typography gutterBottom variant="h5" component="div">
              Issue Description :
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Discription of Title 2
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <Box>
            <Typography gutterBottom variant="h6" component="div">
              Opned :{" "}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              yesterday{" "}
            </Typography>
          </Box>
          <Box>
            <Typography gutterBottom variant="h6" component="div">
              Periority :{" "}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              medium{" "}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
