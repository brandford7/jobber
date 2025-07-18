// src/pages/jobs/JobDetailsPage.tsx
import { useParams } from "react-router";
import { useJobDetails } from "../hooks/useJobDetails";
import { JobDetailsCard } from "../components/JobDetails";
import { Spinner } from "@/components/Spinner";

export const JobDetailsPage = () => {
  const { id } = useParams();

  const { data, isLoading, isError } = useJobDetails(id);

 

  if (isLoading) return <div><Spinner/></div>;
  if (isError) return <div>Job not found</div>;

  const job = data;

  return <JobDetailsCard job={job} />;
};
