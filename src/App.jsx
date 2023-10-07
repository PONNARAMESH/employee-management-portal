import React, { useState, useRef, Suspense } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import "./App.css";
// import PublicRoute from "./components/PublicRoute";
// import PrivateRoute from "./components/PrivateRoute";
// import ProtectedRoutes from "./components/ProtectedRoutes";
import Auth from "./components/Auth";
import LoginPage from "./containers/Login";
import ForgotPasswordPage from "./containers/ForgotPassword";
import PageNotFoundPage from "./containers/PageNotFoundPage";

import { routePaths } from "./utils/routePaths";
import routes from "./routesConfig";
import EmployeeDashboard from "./containers/EmployeeDashboard";

const isAuthenticated = true; // TODO: later it have to pick dynamically

// console.log("##env-file-data ", process.env);
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to='/login' />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<EmployeeDashboard />} />
      <Route
        element={
          <Auth allowedRoles={["employee"]} isAuthenticated={isAuthenticated} />
        }
      >
        <Route
          path={routePaths?.EMPLOYEE_DASHBOARD}
          element={<EmployeeDashboard />}
        />
      </Route>
      <Route path="*" element={<PageNotFoundPage />} />
      {/* <PublicRoute
        path={routePaths.FORGOT_PASSWORD_PAGE}
        isAuthenticated={isAuthenticated}
      >
        <ForgotPasswordPage />
      </PublicRoute>
      <PrivateRoute path="/auth" isAuthenticated={isAuthenticated}>
        <ProtectedRoutes routes={routes | []} />
      </PrivateRoute> */}
    </Routes>
  );
}

export default App;
