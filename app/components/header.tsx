import Image from "next/image";
import Link from "next/link";
import React from "react";

type HeaderProps = {
  name: string;
  pages: {
    id: number;
    label: string;
    link: string;
  }[]
}

const Header = ({ name, pages }:HeaderProps) => {
  return (
    <header className=" flex flex-col relative bg-linear-#557AFF w-full h-48">
      <div className="flex flex-col justify-around h-full px-1 sm:px-6 bg-header z-10">
        <nav className="text-right flex flex-row gap-1 sm:gap-6 self-end">
          {pages.map((page) => (
            <Link
              aria-label={page.label}
              key={page.id}
              href={page.link}
              className="px-6 py-2 min-w-100 hover:text-blue hover:bg-blue-light font-display uppercase tracking-wide sm:bg-transparent bg-white"
            >
              {page.label}
            </Link>
          ))}
        </nav>
        <h1 className="font-bold text-white uppercase pl-2 sm:pl-0">{name}</h1>
      </div>
      <Image
        priority
        height={400}
        width={2000}
        className="w-full h-48 object-cover object-top absolute mb-6"
        src={"/images/jeshoots-com-pUAM5hPaCRI-unsplash.jpg"}
        alt={` Image of ${name}`}
        aria-label={` Image of ${name}`}
      />
    </header>
  );
};

export default Header;
