import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { useSelector } from "react-redux";
import { RootState } from "@/features/redux/store";
import { useLogout } from "@/features/auth/hooks/useLogout";

const Header = () => {
  const [open, setOpen] = useState(false);
  const logout = useLogout();

  const { user, isAuthenticated } = useSelector(
    (state: RootState) => state.auth
  );

  const toggleMenu = () => setOpen((prev) => !prev);
  const avatar = "";

  return (
    <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-primary">
          JobsBoard
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-4 items-center">
          {isAuthenticated && (
            <>
              <Link to="/profile">
                <Button variant="ghost" size="sm">
                  Profile
                </Button>
              </Link>
              <Link to="/post-job">
                <Button variant="ghost" size="sm">
                  Post Job
                </Button>
              </Link>
            </>
          )}

          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="cursor-pointer h-8 w-8">
                  <AvatarImage src={avatar} alt="User" />
                  <AvatarFallback className="space-x-1">
                    {user?.firstname?.charAt(0)}
                    {user?.lastname?.charAt(0)}
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link to="/profile">My Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/settings">Settings</Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link to="/login">
              <Button size="sm">Login</Button>
            </Link>
          )}
        </nav>

        {/* Mobile Toggle */}
        <Button className="md:hidden" onClick={toggleMenu}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-md px-4 py-3 space-y-2">
          {isAuthenticated && (
            <>
              <Link to="/profile" onClick={toggleMenu}>
                <Button variant="ghost" className="w-full justify-start">
                  Profile
                </Button>
              </Link>
              <Link to="/post-job" onClick={toggleMenu}>
                <Button variant="ghost" className="w-full justify-start">
                  Post Job
                </Button>
              </Link>
            </>
          )}
          {isAuthenticated ? (
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => {
                logout();
                toggleMenu();
              }}
            >
              Logout
            </Button>
          ) : (
            <Link to="/login" onClick={toggleMenu}>
              <Button variant="outline" className="w-full">
                Login
              </Button>
            </Link>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
