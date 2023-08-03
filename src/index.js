import { ChakraProvider } from "@chakra-ui/react";
import "assets/css/App.css";
import AdminLayout from "layouts/admin";
import AuthLayout from "layouts/auth";
import RtlLayout from "layouts/rtl";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import theme from "theme/theme";

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path={`auth`} element={<AuthLayout />} />
          <Route path={`admin`} element={<AdminLayout />} />
          <Route path={`rtl`} element={<RtlLayout />} />
          <Route path="/" element={<Navigate to="admin" />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById("root")
);
