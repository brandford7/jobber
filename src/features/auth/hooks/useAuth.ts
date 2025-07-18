// src/hooks/useAuth.ts
import { RootState } from "@/features/redux/store";
import { useSelector } from "react-redux";

export const useAuth = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const { isLoading } = useSelector((state: RootState) => state.auth);

  return {
    user,
    isAuthenticated,
    isLoading,
    role: user?.role ?? null,
  };
};
