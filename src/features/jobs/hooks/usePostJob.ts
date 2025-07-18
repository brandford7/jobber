import { useMutation } from "@tanstack/react-query";
import { Job} from "../schema/job.schema";
import apiClient from "@/lib/axios";
import { toast } from "react-toastify";

export const usePostJob = (options?: {
  onSuccess?: () => void;
  onError?: (error: unknown) => void;
}) => {
  return useMutation({
    mutationFn: async (values: Job) => {
      const response = await apiClient.post("/jobs", values);
      const { success, data } = response.data;
      return { success, data };
    },
    onSuccess: () => {
      toast.success("Job posted successfully");
      options?.onSuccess?.();
    },
    onError: (error: Error) => {
      toast.error(error?.message || "Failed to post job");
      console.log(error.message);
    },
  });
};
