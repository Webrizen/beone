import React, { useContext, useEffect, useState } from "react";
import Navbar from "../navbar";
import baseApi from "../../utils/common";
import UserContext from "../../utils/user_context";

const Layout = ({ children }) => {
  // const { main_user, setmain_user } = useContext(UserContext);

  return (
    <div>
      {" "}
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
