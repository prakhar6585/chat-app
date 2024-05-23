import { Grid, Skeleton, Stack } from "@mui/material";
import React from "react";

const Loader = () => {
  return (
    <Grid container height={"calc(100vh - 4rem)"} spacing={"1rem"}>
      <Grid item sm={4} md={3} sx={{ display: { xs: "none", sm: "block" } }}>
        <Skeleton variant="rectangular" height={"100vh"} />
      </Grid>

      <Grid item xs={12} sm={8} md={5} lg={6}>
        <Stack spacing={"1rem"} />
      </Grid>

      <Grid
        item
        md={4}
        lg={3}
        sx={{
          display: { xs: "none", md: "block" },
          padding: "2rem",
          bgcolor: "rgba(0,0,0,0.85)",
        }}
      >
        <Skeleton variant="rectangular" height={"100vh"} />
      </Grid>
    </Grid>
  );
};

export default Loader;
