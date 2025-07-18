import { cn } from "@/lib/utils";
import {
  FileText,
  LayoutDashboard,
  Settings,
  Users,
  Menu,
  X,
  BadgePlus,
} from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router"; // ensure you're using react-router-dom

interface NavItem {
  title: string;
  href: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  {
    title: "Profile",
    href: "/user-profile",
    icon: <LayoutDashboard className="h-5 w-5" />,
  },
  {
    title: "Admin",
    href: "/admin",
    icon: <Users className="h-5 w-5" />,
  },
  {
    title: "Post Job",
    href: "/create-job",
    icon: <BadgePlus  className="h-5 w-5" />,
  },
  {
    title: "Posts",
    href: "/jobs",
    icon: <FileText className="h-5 w-5" />,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: <Settings className="h-5 w-5" />,
  },
];

export const Dashboard = () => {
  const location = useLocation();
  const [open, setOpen] = useState(true);

  const pathname = location.pathname;

  return (
    <div className="flex">
      {/* Toggle Button */}
      <button
        type="button"
        className="absolute top-4 left-4 z-50 bg-gray-200 p-2 rounded-md md:hidden"
        onClick={() => setOpen(!open)}
      >
        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 z-40 h-screen bg-white shadow-md transition-transform duration-300 ease-in-out md:static md:translate-x-0",
          open ? "translate-x-0 w-64" : "-translate-x-full w-64"
        )}
      >
        <div className="p-5">
          <h2 className="text-lg font-bold mb-6">My App</h2>
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-100",
                    pathname === item.href ||
                      pathname?.startsWith(`${item.href}/`)
                      ? "bg-gray-200"
                      : ""
                  )}
                >
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 ml-0 md:ml-64 p-6 transition-all duration-300 ">
        {/*<h1 className="text-2xl font-bold">Main Content Here</h1>*/}
      </main>
    </div>
  );
};
