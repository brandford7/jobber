import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useApplications = () => {
  return useQuery({
    queryKey: ["applications"],
    queryFn: async () => {
      const res = await axios.get("/api/applications/me");
      return res.data;
    },
  });
};
