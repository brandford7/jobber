import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { FormSelect } from "@/components/FormSelect";
import { FormInput } from "@/components/FormInput";
import { useRegister } from "../hooks/useRegister";
import { Register, registerSchema } from "../schema/auth.schema";
import { Loader2 } from "lucide-react"; // Spinner icon from Lucide
import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router";

const RegisterPage = () => {
  const registerMutation = useRegister();

  const {isAuthenticated} = useAuth()

  const form = useForm<Register>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      role: "candidate",
    },
  });

  if (isAuthenticated) {
      return <Navigate to="/" />;
    }
  

  const onSubmit = (data: Register) => {
    console.log(data);
    
    registerMutation.mutate(data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="w-full max-w-md space-y-6 bg-white dark:bg-background shadow-md rounded-xl p-6">
        <h1 className="text-2xl font-bold text-center">Register</h1>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormInput
              control={form.control}
              name="firstname"
              label="First Name"
              placeholder="Enter your first name"
            />
            <FormInput
              control={form.control}
              name="lastname"
              label="Last Name"
              placeholder="Enter your last name"
            />
            <FormInput
              control={form.control}
              name="email"
              label="Email"
              placeholder="Enter your email"
            />
            <FormInput
              control={form.control}
              name="password"
              label="Password"
              type="password"
              placeholder="Enter your password"
            />
            <FormSelect
              control={form.control}
              name="role"
              label="Role"
              options={[
                { label: "Candidate", value: "candidate" },
                { label: "Recruiter", value: "recruiter" },
              ]}
            />

            <Button
              type="submit"
              className="w-full"
              disabled={registerMutation.isPending}
            >
              {registerMutation.isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Signing up...
                </>
              ) : (
                "Sign Up"
              )}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default RegisterPage;
