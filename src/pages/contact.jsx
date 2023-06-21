import React, { useState, useEffect, useContext } from "react";
import "../styles/profile.css";
import { Link } from "react-router-dom";
import DissatisfactionForm from '../components/DissatisfactionForm';
import RouteGuard from "../components/routeguard";
import Layout from "../components/Layout/layout";


const Profile = () => {

  return (
    <>
      <Layout>
        <RouteGuard />
          <div className="contact">
          <DissatisfactionForm/>
          </div>
      </Layout>
    </>
  );
};

export default Profile;
