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
import UserProfile from "./containers/UserProfile";

const isAuthenticated = true; // TODO: later it have to pick dynamically

// console.log("##env-file-data ", process.env);
function App() {
  return (
    <div div="app">
      <nav>
        <ul className="App-header1">
          <li>
            <Link to={routePaths?.LOGIN_PAGE}>login</Link>
          </li>
          <li>
            <Link to={routePaths?.FORGOT_PASSWORD_PAGE}>Forgot Password</Link>
          </li>
          <li>
            <Link to={routePaths?.EMPLOYEE_DASHBOARD}>Dashboard</Link>
          </li>
          <li>
            <Link to={routePaths?.PROFILE_PAGE}>User Profile</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path={routePaths?.LOGIN_PAGE} element={<LoginPage />} />
        <Route
          path={routePaths?.FORGOT_PASSWORD_PAGE}
          Component={ForgotPasswordPage}
        />
        <Route
          path={routePaths?.EMPLOYEE_DASHBOARD}
          element={<EmployeeDashboard />}
        />
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
        <Route
          element={
            <Auth
              allowedRoles={["EMPLOYEE", "PROJECT_MANAGER", "ADMIN"]}
              isAuthenticated={isAuthenticated}
            />
          }
        >
          <Route path={routePaths?.PROFILE_PAGE} element={<UserProfile />} />
        </Route>
        <Route path="*" element={<PageNotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
