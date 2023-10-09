import { lazy } from "react";
import { routePaths } from "./utils/routePaths";

const routes = [
  {
    path: routePaths?.EMPLOYEE_DASHBOARD,
    component: lazy(() => import("./containers/EmployeeDashboard")),
    exact: true,
  },
  {
    path: routePaths?.PROFILE_PAGE,
    component: lazy(() => import("./containers/UserProfile")),
    exact: true,
  },
];

export default routes;
