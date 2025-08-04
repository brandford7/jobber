import apiClient from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export interface JobApplicationQueryParams {
  page?: number;
  limit?: number;
  search?: string;
  jobType?: string;
  location?: string;
}

export const useMyApplications = (params: JobApplicationQueryParams) => {
  return useQuery({
    queryKey: ["job-applications", params],
    queryFn: async () => {
      const response = await apiClient("/job-applications/me", { params });
      const { data, success, meta } = response.data;
      return { data, success, meta };
    },
  });
};
