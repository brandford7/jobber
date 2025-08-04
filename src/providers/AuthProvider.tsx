// src/providers/AuthProvider.tsx
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import apiClient from "@/lib/axios";
import { logout, setLoading, setUser } from "@/features/redux/auth/authSlice";
import { RootState } from "@/features/redux/store";
import { Spinner } from "@/components/Spinner";
import  { isCancel } from "axios";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch();
  const loading = useSelector((state: RootState) => state.auth.isLoading);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const fetchUser = async () => {
      // ✅ Skip request if no token is found
      const token = localStorage.getItem("token");
      if (!token) {
        dispatch(setLoading(false));
        return;
      }

      try {
        const { data } = await apiClient.get("/auth/me", { signal });
        dispatch(setUser(data.user));
      } catch (err: unknown) {
        if (!isCancel(err)) {
          dispatch(logout());
        }
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchUser();

    return () => controller.abort();
  }, [dispatch]);

  if (loading) return <Spinner />;

  return <>{children}</>;
};

export default AuthProvider;
