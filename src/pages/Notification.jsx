import React, { useEffect } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout/layout";
import baseApi from "../utils/common";

const Notification = () => {
  const navigate = useNavigate();

  const handleOkClick = () => {
    Swal.fire("Success", "Response captured", "success");
  };

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
        navigate("/contact");
      }
    });
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const ac = queryParams.get("ac");
    const mc = queryParams.get("mc");

    console.log({ ac, mc });

    baseApi
      .get(`/notifications?ac=${ac}&mc=${mc}`)
      .then((response) => {
        console.log(response);
        handleOkClick();
      })
      .catch((error) => {
        console.log("notification error", error);
        handleNotOkClick();
      });
  }, []);

  return (
    <Layout>
      <div className="unique-section">
        <div className="modelBoxxx">
          <h2>Hey 👋, Your Response Is Being Recorded...</h2>
        </div>
      </div>
    </Layout>
  );
};

export default Notification;
