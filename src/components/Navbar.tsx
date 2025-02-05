// components/Navbar.tsx
import Link from "next/link";
import React from "react";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Navbar: React.FC = async () => {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const user = await getUser();
  const isUserAuthenticated = await isAuthenticated();

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

        {/* Se o usuário NÃO estiver autenticado, mostra os links de login e cadastro */}
        {!isUserAuthenticated && (
          <>
            <li>
              <LoginLink>Sign in</LoginLink>
            </li>
            <li>
              <RegisterLink>Sign up</RegisterLink>
            </li>
          </>
        )}

        {/* Se o usuário ESTIVER autenticado, mostra o link de logout */}
        {isUserAuthenticated && (
          <div>
            <ul>
            <li>
              <p>{user.email}</p>
            </li>
            <li>
              <LogoutLink>Log out</LogoutLink>
            </li>
            <li>
              <Link href="/dashboard" className="text-white hover:underline">
                Dashboard
              </Link>
            </li>
            </ul>
          </div>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
