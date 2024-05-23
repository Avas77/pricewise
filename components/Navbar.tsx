import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header>
      <nav className="nav">
        <Link href={"/"} className="flex">
          <Image
            src="/assets/icons/logo.svg"
            alt="Logo"
            width={27}
            height={27}
          />
          <p className="nav-logo">
            Price <span className="text-primary">Wise</span>
          </p>
        </Link>
        <div className="flex gap-5">
          <Image
            src="/assets/icons/search.svg"
            alt="search icon"
            width={28}
            height={28}
          />
          <Image
            src="/assets/icons/black-heart.svg"
            alt="search icon"
            width={28}
            height={28}
          />
          <Image
            src="/assets/icons/user.svg"
            alt="search icon"
            width={28}
            height={28}
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
