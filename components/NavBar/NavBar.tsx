import Link from "next/link";
import { useState, useEffect, Dispatch, SetStateAction } from "react";
import Image from "next/image";
import fourbicLogo from "@public/assets/fourbic.png";
import fourbicDarkLogo from "@public/assets/fourbic-dark.png";
import { MdClose } from "react-icons/md";
import Header from "./Header";
import { FaBars } from "react-icons/fa";

interface Props {
  toggleMenu: boolean;
  setToggleMenu: Dispatch<SetStateAction<boolean>>;
  children?: JSX.Element;
  colorChange: boolean;
}
export default function NavBar({
  children,
  toggleMenu,
  setToggleMenu,
  colorChange,
}: Props) {
  return (
    <>
      <Header />
      <nav
        className={`z-[999] flex items-center h-[80px] justify-center overflow-auto  shadow-sm transition-transform
        bg-fill ${
          colorChange
            ? "shadow-md bg-primary text-white fixed top-0 w-full"
            : "bg-white bg-cover absolute lg:top-[40px] top-0 self-center lg:w-[80%] w-full h-[70px] rounded-full"
        }
       } md:px-4 sm:px-4`}
        data-testid="nav"
      >
        <div className="lg:w-[80%] w-full max-w-[1500px] flex justify-between items-center sm:px-0 px-2">
          <Link href={"/"} className="h-full flex items-center ">
            <Image
              src={colorChange ? fourbicDarkLogo : fourbicLogo}
              alt="Slade360"
              height={100}
              width={100}
              data-testid="fourbic-logo"
            />
          </Link>
          <section className="flex  p-0">{children}</section>
        </div>

        {toggleMenu ? (
          <MdClose
            onClick={() => setToggleMenu(!toggleMenu)}
            className="lg:hidden block text-4xl mr-2 p-1 cursor-pointer text-secondary bg-white  hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded"
            data-testid="close-menu"
          />
        ) : (
          <FaBars
            onClick={() => setToggleMenu(!toggleMenu)}
            className="lg:hidden mr-2 text-4xl text-black bg-white hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded"
          />
        )}
      </nav>
    </>
  );
}
