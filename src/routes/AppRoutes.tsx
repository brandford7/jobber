import { JobDetailsPage } from "@/features/jobs/pages/JobDetailsPage";
import AppLayout from "@/layouts/AppLayout";
import AuthLayout from "@/layouts/AuthLayout";
import AdminPage from "@/pages/Admin";
import Home from "@/pages/Home";
import Login from "@/features/auth/pages/LoginPage";
import NotFoundPage from "@/pages/NotFound";
import ProfilePage from "@/features/users/pages/Profile";
import Register from "@/features/auth/pages/RegisterPage";
import { Routes, Route } from "react-router";
import PostJobPage from "@/features/jobs/pages/PostJob";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="post-job" element={<PostJobPage />} />

        <Route path="profile" element={<ProfilePage />} />
        <Route path="admin" element={<AdminPage />} />
        <Route path="jobs/:id" element={<JobDetailsPage />} />
      </Route>

      
      
      <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      <Route path="*" element={<NotFoundPage />}></Route>
    </Routes>
  );
}
