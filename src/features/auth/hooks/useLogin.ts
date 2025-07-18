// src/hooks/useLogin.ts
import apiClient from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { Login } from "../schema/auth.schema";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setUser } from "@/features/redux/auth/authSlice";
import { useNavigate } from "react-router";

export const useLogin = () => {
  const dispatch = useDispatch();

  const navigate= useNavigate()

  return useMutation({
    mutationFn: async (data: Login) => {
      const res = await apiClient.post("/auth/login", data);
      return res.data; // { access_token, user }
    },
    onSuccess: ({ access_token, user }) => {
      localStorage.setItem("token", access_token);
      dispatch(setUser(user)); // Optional: update client state
      navigate('/')
    },
    onError: (error: any) => {
      const message = error?.response?.data?.message || "Login failed";
      toast.error(message);
    },
  });
};
