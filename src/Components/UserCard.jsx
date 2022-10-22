import {
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Typography,
  // Box,
  Card,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const UserCard = () => {
  return (
    <Grid
      gap={5}
      // container
      // rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 3, md: 4 }}
      sx={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        mt: 5,
      }}
    >
      <Card
        sx={{
          width: "400px",
          height: "180px",
          border: "1px solid gray",
        }}
      >
        <CardContent>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h6">Syed Hassan Hussain</Typography>
            <Typography variant="p" sx={{ display: "flex" }}>
              Code:<Typography> 4512 </Typography>
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default UserCard;
