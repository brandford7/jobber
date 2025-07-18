import { Link } from "react-router";

const Sidebar = () => {
  return (
    <aside className="flex flex-col h-screen w-1/5 pt-10 space-y-5 items-center shadow-lg bg-white ">
      <Link to="/" className="cursor-pointer border-b ">
        Overview
      </Link>
      <Link to="create-job" className="cursor-pointer border-b">
        Create Job
      </Link>
      <Link to="all-jobs" className="cursor-pointer border-b">
        All Jobs
      </Link>
      <Link to="profile" className="cursor-pointer border-b">
        Profile
      </Link>
    </aside>
  );
};

export default Sidebar;
