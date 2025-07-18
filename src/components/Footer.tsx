import { Link } from "react-router";
import { Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t mt-10 py-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-muted-foreground">
        {/* Branding */}
        <div>
          <h2 className="text-lg font-semibold text-primary">JobsBoard</h2>
          <p className="mt-1">Find your next opportunity here.</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-2 md:items-center">
          <Link to="/about" className="hover:underline">
            About
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
          <Link to="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
        </div>

        {/* Social / Copyright */}
        <div className="flex flex-col md:items-end gap-2">
          <div className="flex space-x-3">
            <a href="#" aria-label="Facebook" className="hover:text-primary">
              <Facebook size={18} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-primary">
              <Twitter size={18} />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-primary">
              <Linkedin size={18} />
            </a>
          </div>
          <p className="text-xs">
            &copy; {new Date().getFullYear()} JobsBoard. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
