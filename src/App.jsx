import React, { useState, useRef, Suspense } from "react";
import { Routes, Route, Navigate, Link } from "react-router-dom";
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
    <div div="app">
      <ul className="App-header1">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to={routePaths?.LOGIN_PAGE}>login</Link>
        </li>
        <li>
          <Link to={routePaths?.EMPLOYEE_DASHBOARD}>Dashboard</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<EmployeeDashboard />} />
        <Route
          element={
            <Auth
              allowedRoles={["EMPLOYEE"]}
              isAuthenticated={isAuthenticated}
            />
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
    </div>
  );
}

export default App;
