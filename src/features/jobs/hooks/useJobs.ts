// src/hooks/useJobs.ts
import { useQuery } from "@tanstack/react-query";
import apiClient from "@/lib/axios";

export interface JobQueryParams {
  page?: number;
  limit?: number;
  search?: string;
  jobType?: string;
  location?: string;
}

export const useJobs = (params: JobQueryParams) => {
  return useQuery({
    queryKey: ["jobs", params],
    queryFn: async () => {
      const response = await apiClient.get("/jobs", { params });
      const { success, data, meta } = response.data;
      
      
      return { success, data, meta };
      
    },
  });
};
