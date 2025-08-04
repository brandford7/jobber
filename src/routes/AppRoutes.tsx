
import { RequireAuth } from "@/features/auth/components/RequireAuth";
import LoginPage from "@/features/auth/pages/LoginPage";
import RegisterPage from "@/features/auth/pages/RegisterPage";
import { JobDetailsPage } from "@/features/jobs/pages/JobDetailsPage";
import PostJobPage from "@/features/jobs/pages/PostJob";
import ProfilePage from "@/features/users/pages/Profile";
import AppLayout from "@/layouts/AppLayout";
import AuthLayout from "@/layouts/AuthLayout";
import AdminPage from "@/pages/Admin";
import Home from "@/pages/Home";
import NotFoundPage from "@/pages/NotFound";
import { Route, Routes } from "react-router";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="jobs/:id" element={<JobDetailsPage />} />

        {/* Protected routes: require login */}
        <Route element={<RequireAuth />}>
          <Route path="post-job" element={<PostJobPage />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>

        {/* Admin-only route */}
        <Route element={<RequireAuth allowedRoles={["admin"]} />}>
          <Route path="admin" element={<AdminPage />} />
        </Route>
      </Route>

      {/* Public routes */}
      <Route element={<AuthLayout />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
