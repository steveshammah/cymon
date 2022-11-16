import React from "react";
import Link from "next/link";

interface Props {
  children?: JSX.Element;
}

const awsBucketUrl = "https://d1qlwo81ldzrjs.cloudfront.net/prod/";

export const Header = ({ children }: Props) => {
  return (
    <nav
      className="fixed top-0 w-full z-50 flex items-center
     justify-between gap-4   h-16 bg-white px-6
     "
    >
      <Link
        href="/"
        className="text-md text-brandColor font-bold h-full flex-1 flex items-center justify-start "
      >
        <h3 className="mr-1">HealthCloud by</h3>
        {"  "}
        {"  "}
        <img
          src={`${awsBucketUrl}sil_logo_images/SLADE-Logo.png`}
          alt="SIL Logo"
          className="h-[100%] w-20 object-contain"
        />
      </Link>
      <section className="flex gap-4 p-0">{children}</section>
    </nav>
  );
};
