import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, useRouteError } from "react-router-dom";
import Layout from "../components/Layout/layout";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <Layout>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <Typography
            variant="h1"
            sx={{ fontSize: 120, fontWeight: "bold", mb: 4 }}
          >
            404
          </Typography>
          <Typography variant="h4" sx={{ mb: 4 }}>
            Oops! Page not found.
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "center", mb: 4 }}>
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </Typography>
          <Link to='/'>
          <Button variant="contained" color="primary">
            Go to Home
          </Button>
          </Link>
        </Box>
      </Layout>
    </>
  );
}
