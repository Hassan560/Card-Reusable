import { Box, FormControl, TextField, Typography } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography variant="h5">Customer</Typography>
      <TextField
        placeholder="Search"
        size="small"
        InputProps={{
          startAdornment: (
            <SearchIcon sx={{ paddingRight: "5px", opacity: "0.5" }} />
          ),
        }}
      />
    </Box>
  );
};

export default Header;
