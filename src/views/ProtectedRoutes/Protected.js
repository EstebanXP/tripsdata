import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const Protected = ({ token, children }) => {
  if (token === null || token === undefined) {
    return <Navigate to="/"></Navigate>;
  }
  return <Outlet></Outlet>;
};

export default Protected;
