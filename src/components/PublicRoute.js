import { Route, Navigate } from "react-router-dom";
import { routePaths } from "../utils/routePaths";
function PublicRoute({ path, component, isAuthenticated, ...rest }) {
  return (
    <Route
      path={path}
      component={<component {...rest} />}
      // render={({ location }) =>
      //   !isAuthenticated ? (
      //     children
      //   ) : (
      //     <Navigate to={routePaths?.EMPLOYEE_DASHBOARD || "/"} />
      //   )
      // }
    />
  );
}

export default PublicRoute;
