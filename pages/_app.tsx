import "../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import NavBar from "@components/NavBar/NavBar";
import { useEffect, useState } from "react";
import { footerLinks } from "@components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [colorChange, setColorChange] = useState(false);

  const changeNavbarColor = () => {
    if (window && window.scrollY >= 50) {
      return setColorChange(true);
    }
    setColorChange(false);
  };

  useEffect(
    () => window && window.addEventListener("scroll", changeNavbarColor),
    []
  );

  return (
    <main className="flex flex-col h-auto">
      <NavBar
        setToggleMenu={setToggleMenu}
        toggleMenu={toggleMenu}
        colorChange={colorChange}
      >
        <div
          className={`${"configure mobile"} flex flex-1 items-center justify-center font-semibold`}
        >
          <ul
            className={`${
              toggleMenu
                ? "flex flex-col lg:flex-row lg:w-fit w-full lg:relative fixed lg:top-0 top-[70px] right-0 left-0 bottom-0 lg:h-auto h-[calc(100vh-70px)] lg:bg-transparent bg-white justify-around items-center"
                : "lg:flex hidden"
            }`}
          >
            {footerLinks.map((siteLink, index) => (
              <li
                className={`cursor-pointer text-sm mx-4 hover:text-secondary ${
                  colorChange ? "lg:text-white text-primary" : "text-primary"
                }`}
                key={index}
              >
                <Link
                  href={`${siteLink.url}`}
                  target="_blank"
                  onClick={() => setToggleMenu(!toggleMenu)}
                >
                  {siteLink.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </NavBar>
      <Component {...pageProps} />
    </main>
  );
}
