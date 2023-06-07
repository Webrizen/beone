import React from "react";
import { useRouteError, Link } from "react-router-dom";
import { Button } from '@mui/material';
import Layout from '../components/Layout/layout';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <Layout>
        <div id="error-page">
          <h1>Oops!</h1>
          <br />
          <p>Sorry, an unexpected error has occurred.</p>
          <Link to="/dashboard">
          <Button>Dashboard</Button>
          </Link>
        </div>
      </Layout>
    </>
  );
}
