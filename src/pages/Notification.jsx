import { Button } from "@mui/material";
import React, { useEffect } from "react";
import Swal from "sweetalert2";
import Layout from '../components/Layout/layout';
import { useNavigate } from 'react-router-dom';
import baseApi from "../utils/common";
const Notification = () => {
  const navigate = useNavigate();
  const handleOkClick = () => {
    Swal.fire("Success", "Response captured", "success");
  };
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const ac = queryParams.get('ac');
    const mc = queryParams.get('mc');
    console.log({ "ac": ac, "mc": mc });
    baseApi.get(`/notifications?ac=${ac}&mc=${mc}`).then((response) => {
      console.log(response);
      // yahapr loader hide karwado 
    }).catch((error) => {
      console.log("notification error", error)
    })
  }, []);
  const handleNotOkClick = () => {
    Swal.fire({
      title: "Sorry",
      text: "Can't capture your response. Do you need any help?",
      icon: "error",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        // Handle "Yes" button click
        navigate('/contact');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // Handle "No" button click or outside click of the modal
        Swal.fire("You clicked No or outside the modal.");
      }
    });
  };

  return (
    <>
      <Layout>
        <div className="unique-section">
          <div className="modelBoxxx">
            <h2>Hey 👋 user.name</h2>
            <p>
              Hope  you're ready for the Hormone Tests. To indicate the same, click any one link below depending upon your experience.
              <br />
              <br />
              Regards, <br />
              BeOne Team.
            </p>
            <div className="btn-holder">
              <Button onClick={handleOkClick}>OK</Button>
              <Button onClick={handleNotOkClick}>NOT OK</Button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Notification;
