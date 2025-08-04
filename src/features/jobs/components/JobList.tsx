import { useSearchParams } from "react-router";
import { useJobs } from "../hooks/useJobs";
import { Job } from "../schema/job.schema";
import { JobCard } from "./JobCard";
import { Spinner } from "@/components/Spinner";

const JobList = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get("page") || 1);
  const search = searchParams.get("search") || "";
  const location = searchParams.get("location") || "";

  const { data, isLoading, isError } = useJobs({
    page,
    search,
    location,
    limit: 10,
  });

  if (isLoading) return <Spinner />;
  if (isError)
    return <p className="text-center text-destructive">Failed to load jobs.</p>;

  /*
  const handlePageChange = (newPage: number) => {
    // Update just the page param, keeping others the same
    const updatedParams = new URLSearchParams(searchParams);
    updatedParams.set("page", newPage.toString());
    setSearchParams(updatedParams);
  };*/

const handlePageChange = () => {
  setSearchParams();
};

handlePageChange();


  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {data?.data.map((job: Job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};

export default JobList;
