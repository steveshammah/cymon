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
          className={`${"configure mobile"} flex flex-1 items-center justify-center text-primary font-semibold`}
        >
          <ul className="flex flex-grow w-full justify-around">
            {footerLinks.map((siteLink, index) => (
              <li
                className={`cursor-pointer text-sm mx-4 hover:text-secondary ${
                  colorChange && "text-white"
                }`}
                key={index}
              >
                <Link href={`${siteLink.url}`} target="_blank">
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
