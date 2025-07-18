import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Login, loginSchema } from "../schema/auth.schema";
import { FormInput } from "@/components/FormInput";
import { useLogin } from "../hooks/useLogin";
import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router";

const LoginPage = () => {
  const loginMutation = useLogin();

  const { isAuthenticated } = useAuth();

  const form = useForm<Login>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }


  const onSubmit = (data: Login) => {
    loginMutation.mutate(data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="w-full max-w-md space-y-6 bg-white dark:bg-background shadow-md rounded-xl p-6">
        <h1 className="text-2xl font-bold text-center">Login</h1>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormInput control={form.control} name="email" label="Email" />
            <FormInput
              control={form.control}
              name="password"
              label="Password"
              type="password"
            />

            <Button
              type="submit"
              className="w-full"
              disabled={loginMutation.isPending}
            >
              {loginMutation.isPending ? "Signing in..." : "Sign In"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
