// components/Navbar.tsx
import Link from "next/link";
import React from "react";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";


const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600">
      <ul className="container mx-auto flex justify-center items-center py-4 space-x-6">
        <li>
          <Link href="/" className="text-white hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-white hover:underline">
            About
          </Link>
        </li>
        <li>
          <Link href="/services" className="text-white hover:underline">
            Services
          </Link>
        </li>
        <li>
          <Link href="/contact" className="text-white hover:underline">
            Contact
          </Link>
        </li>
        <li>
          <LoginLink>Sign in</LoginLink>
        </li>

        <li>
          <RegisterLink>Sign up</RegisterLink>
        </li>
        <li>
        <LogoutLink>Log out</LogoutLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
