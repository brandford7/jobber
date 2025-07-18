// src/components/JobSearch.tsx
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";

interface JobSearchProps {
  search: string;
  setSearch: (value: string) => void;
}

export const JobSearch = ({ search, setSearch }: JobSearchProps) => {
  const [term, setTerm] = useState(search);

  // debounce user typing before calling setSearch
  useEffect(() => {
    const debounce = setTimeout(() => {
      setSearch(term);
    }, 500);

    return () => clearTimeout(debounce);
  }, [term, setSearch]);

  useEffect(() => {
    // update local state if the external search param changes (like back/forward nav)
    setTerm(search);
  }, [search]);

  return (
    <div className="w-full max-w-md mx-auto my-4">
      <Input
        placeholder="Search jobs..."
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
    </div>
  );
};
