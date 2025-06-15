import { Outlet, Navigate } from "react-router-dom";
import { useUserContext } from "../context/useUserContext";

function ProtectedRoute({ redirectPath = '/login', children }) {
  const { currentUser } = useUserContext();

  if (!currentUser.email) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
}

export default ProtectedRoute;
