import type React from "react";

import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";

interface FormButtonProps  {
  loading?: boolean;
  children: React.ReactNode;
  
}

export function FormButton({ loading, children, ...props }: FormButtonProps) {
  return (
    <Button disabled={loading} {...props}>
      {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </Button>
  );
}
