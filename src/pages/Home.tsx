// src/pages/Home.tsx
import { useSearchParams } from "react-router";
import { useCallback } from "react";
import JobList from "@/features/jobs/components/JobList";
import { JobSearch } from "@/features/jobs/components/JobSearch";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get("search") || "";

  const setSearch = useCallback(
    (value: string) => {
      const newParams = new URLSearchParams(searchParams);
      if (value) {
        newParams.set("search", value);
      } else {
        newParams.delete("search");
      }
      setSearchParams(newParams, { replace: true });
    },
    [searchParams, setSearchParams]
  );

  return (
    <div className="py-10 space-y-5">
      <JobSearch search={search} setSearch={setSearch} />
      <JobList />
    </div>
  );
};

export default Home;
