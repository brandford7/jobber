// src/components/RequireAuth.tsx
import { Navigate, Outlet } from "react-router";
import { useSelector } from "react-redux";
import { RootState } from "@/features/redux/store";

export function RequireAuth({ allowedRoles }: { allowedRoles?: string[] }) {
  const { user, isAuthenticated, isLoading } = useSelector(
    (state: RootState) => state.auth
  );

  if (isLoading) return null; // Or a spinner

  if (!isAuthenticated || !user) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}
