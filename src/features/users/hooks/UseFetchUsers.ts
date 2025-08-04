import apiClient from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export interface UserQueryParams {
  limit?: number;
  search?: string;
}

export const useFetchUsers = (params: UserQueryParams) => {
  return useQuery({
    queryFn: async () => {
      const response = await apiClient.get("/users", { params });

      const { success, data, meta } = response.data;

      return { success, data, meta };
    },
    queryKey: ["users", params],
  });
};
