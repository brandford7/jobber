import { logout } from "@/features/redux/auth/authSlice";
import { useDispatch } from "react-redux";



export const useLogout = () => {

  const dispatch = useDispatch();
  return () => {
    localStorage.removeItem("token");
    dispatch(logout());
    

  };
};
