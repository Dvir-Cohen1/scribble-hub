import { Box, Typography } from "@mui/material";

import AdbIcon from "@mui/icons-material/Adb";
import React from "react";

const AppLogo = ({ title = "logo" }) => {
  return (
    <>
      <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 2,
          display: { xs: "none", md: "flex" },
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        {title}
      </Typography>
    </>
  );
};

export default AppLogo;
