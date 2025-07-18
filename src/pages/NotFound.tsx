"use client";

import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="container flex flex-col items-center justify-center min-h-[80vh] py-10 text-center">
      <h1 className="text-6xl font-bold">404</h1>
      <h2 className="text-2xl font-semibold mt-4">Page Not Found</h2>
      <p className="text-muted-foreground mt-2 max-w-md">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Button className="mt-8" onClick={() => navigate("/")}>
        Go to Home
      </Button>
    </div>
  );
}
