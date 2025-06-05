import { Navigate, Outlet } from "react-router-dom";
import { getCookie } from "../../user-dashboard/utils/cookiesUtils";

const RequireAuth = () => {
  const authCookie = getCookie("RW_Token");
  return authCookie ? <Outlet /> : <Navigate to="/login" replace />;
};

export default RequireAuth;
