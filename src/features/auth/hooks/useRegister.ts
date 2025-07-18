import { useMutation } from "@tanstack/react-query";
import apiClient from "@/lib/axios";
import { useDispatch } from "react-redux";
import { Register } from "../schema/auth.schema";
import { setUser } from "@/features/redux/auth/authSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

export const useRegister = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (data: Register) => {
      const response = await apiClient.post("/auth/signup", data);
      return response.data;
    },
    onSuccess: ({ access_token, user }) => {
      localStorage.setItem("token", access_token);
      dispatch(setUser(user));
      toast.success("Registration successful!");
      navigate("/"); // or "/dashboard" depending on your UX
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || "Registration failed");
    },
  });
};
