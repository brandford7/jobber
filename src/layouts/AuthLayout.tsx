import { Outlet } from "react-router";
import Header from "../components/Header";
//import { AuthProvider } from "@/contexts/auth-context";

const AuthLayout = () => {
  return (
    <div className="h-screen w-full bg-white">
      <Header />
      <Outlet />
    </div>
  );
};

export default AuthLayout;
