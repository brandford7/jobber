// src/layouts/AppLayout.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Outlet } from "react-router";
import { Suspense } from "react";
import { Spinner } from "@/components/Spinner";

const AppLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
};

export default AppLayout;
