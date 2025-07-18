// src/pages/PostJobPage.tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { FormInput } from "@/components/FormInput";
import { FormSelect } from "@/components/FormSelect";
import { Button } from "@/components/ui/button";
import { Job, JobSchema } from "../schema/job.schema";
import { usePostJob } from "../hooks/usePostJob";
import { FormTextarea } from "@/components/FormTextArea";

const PostJobPage = () => {
  const form = useForm<Job>({
    resolver: zodResolver(JobSchema),
    defaultValues: {
      title: "",
      description: "",
      company: "",
      location: "",
      jobType: "",
      salary: "",

    },
  });

  const postJob = usePostJob({
    onSuccess: () => {
      form.reset(); // Clears the form
    },
  });

  const onSubmit = (data: Job) => {
    postJob.mutate(data);
  };

  return (
    <div className="flex justify-center min-h-screen items-center px-4">
      <div className="w-full max-w-2xl p-6 bg-white dark:bg-background rounded-xl shadow-md space-y-6">
        <h1 className="text-2xl font-bold text-center">Post a Job</h1>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormInput
              name="title"
              label="Job Title"
              placeholder="Enter job title"
              control={form.control}
            />
            <FormTextarea
              name="description"
              label="Job Description"
              placeholder="Enter job description"
              control={form.control}
            />
            <FormInput
              name="company"
              label="Company"
              placeholder="Enter company name"
              control={form.control}
            />
            <FormInput
              name="location"
              label="Location"
              placeholder="City or remote"
              control={form.control}
            />
            <FormInput
              name="salary"
              label="Salary (Optional)"
              placeholder="$50,000"
              control={form.control}
            />
            <FormSelect
              name="jobType"
              label="Job Type"
              control={form.control}
              options={[
                { label: "Full-time", value: "full-time" },
                { label: "Part-time", value: "part-time" },
                { label: "Contract", value: "contract" },
              ]}
            />
            <Button
              type="submit"
              className="w-full"
              disabled={postJob.isPending}
            >
              {postJob.isPending ? "Posting..." : "Post Job"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default PostJobPage;
