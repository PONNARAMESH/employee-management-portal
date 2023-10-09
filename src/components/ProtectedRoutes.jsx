import { Suspense } from "react";
import { Route, Router, Routes } from "react-router-dom";
// import routes from "routes"; // Route list
// import Loader from "sharedComponent/Loader";
import { CircularProgress } from "@mui/material";

const ProtectedRoutes = ({ routes }) => (
  <Routes>
    <Suspense fallback={<CircularProgress />}>
      {routes.map(({ component: Component, path, exact }) => (
        <Route path={`/${path}`} key={path} exact={exact}>
          <Component />
        </Route>
      ))}
    </Suspense>
  </Routes>
);

export default ProtectedRoutes;
