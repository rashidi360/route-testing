import { ChakraProvider } from "@chakra-ui/react";
import "assets/css/App.css";
import AdminLayout from "layouts/admin";
import AuthLayout from "layouts/auth";
import RtlLayout from "layouts/rtl";
import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  createRoutesFromElements,
} from "react-router-dom";
import theme from "theme/theme";
import RootLayout from "layouts/RootLayout";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "auth",
    element: <AuthLayout />,
  },
  {
    path: "admin",
    element: <AdminLayout />,
  },
  {
    path: "rtl",
    element: <RtlLayout />,
  },
  {
    path: "/",
    element: <Navigate to="admin" />,
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<RootLayout />}>
//       <Route path={`auth`} element={<AuthLayout />} />
//       <Route path={`admin`} element={<AdminLayout />} />
//       <Route path={`rtl`} element={<RtlLayout />} />
//       <Route index path="/" element={<Navigate to="admin" />} />
//     </Route>
//   )
// );

// function index(){
//   return(
//     <RouterProvider router={router} />
//   )
// }

// export default index

// ReactDOM.render(
//   <ChakraProvider theme={theme}>
//     <React.StrictMode>
//       <BrowserRouter>
//         <Routes>
//           <Route path={`auth`} element={<AuthLayout />} />
//           <Route path={`admin`} element={<AdminLayout />} />
//           <Route path={`rtl`} element={<RtlLayout />} />
//           <Route path="/" element={<Navigate to="admin" />} />
//         </Routes>
//       </BrowserRouter>
//     </React.StrictMode>
//   </ChakraProvider>,
//   document.getElementById("root")
// );
