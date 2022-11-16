import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Header } from "../components";
import Link from "next/link";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className="flex flex-col h-auto">
      <Header>
        <Link
          href="#getting-started"
          className=" text-white bg-brandColor text-sm h-9 px-2 flex items-center justify-center rounded-md"
        >
          Getting Started
        </Link>
      </Header>
      <Component {...pageProps} />
    </main>
  );
}
