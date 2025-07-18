import { useQuery } from "@tanstack/react-query";
import apiClient from "@/lib/axios";

export const useJobDetails = (jobId?: string ) => {
  return useQuery({
    queryKey: ["job", jobId],
    queryFn: async () => {
      const res = await apiClient.get(`/jobs/${jobId}`);
      return res.data; // Expects: { data: Job }
    },
    enabled: !!jobId,
  });
};
