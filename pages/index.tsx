import Link from "next/link";
import { Footer } from "../components";

const url = "https://d1qlwo81ldzrjs.cloudfront.net/prod/";
export const LogoImages = {
  SIL_Logo: `${url}sil_logo_images/SIL-Logo.png`,
  SIL_Logo_Small: `${url}sil_logo_images/SIL-Logo-Small.jpg`,
  SIL_Logo_White: `${url}sil_logo_images/SIL-Logo-White.png`,
  SLADE_Logo_White: `${url}sil_logo_images/SLADE-Logo-White.png`,
  SLADE_Logo_Small: `${url}sil_logo_images/SLADE-Logo-Small.png`,
  SLADE_Logo: `${url}sil_logo_images/SLADE-Logo.png`,
  Favicon: `${url}sil_logo_images/favicon.png`,
};

export default function Home() {
  return (
    <div className="flex flex-col pt-[64px] items-center justify-center">
      <h2 className="sm:text-4xl text-2xl text-black font-bold text-center tracking-wide pt-16">
        Digital infrastructure for <br /> healthcare
      </h2>

      <p className="text-center pt-4 text-[#5A6980]">
        4000+ healthcare providers and insurance companies across <br />
        Africa use our software and APIs to deliver quality <br />
        healthcare and wellness services
      </p>

      <div className="flex my-6">
        <input
          type="text"
          placeholder="Your Email Address"
          className="outline-none rounded-md mx-2 h-9 px-2 shadow-md w-72"
        />
        <Link
          href="#getting-started"
          className=" text-white bg-brandColor text-sm h-9 px-2 flex items-center justify-center rounded-md"
        >
          Getting Started
        </Link>
      </div>

      <div className="flex h-50vh my-6">
        <img src="/preauth.png" alt="" />
      </div>

      <div className="flex flex-col my-4 h-60 w-full justify-center items-center">
        <h2 className="text-[#5A6980] text-xl">
          Powering leading companies like
        </h2>
        <div className="flex justify-around w-2/3 my-2">
          <img
            src="/madison.png"
            alt="Business Partner Logo"
            className="h-16 w-40 bg-white shadow-md"
          />
          <img
            src="/madison.png"
            alt="Business Partner Logo"
            className="h-16 w-40 bg-white shadow-md"
          />
          <img
            src="/madison.png"
            alt="Business Partner Logo"
            className="h-16 w-40 bg-white shadow-md"
          />
          <img
            src="/madison.png"
            alt="Business Partner Logo"
            className="h-16 w-40 bg-white shadow-md"
          />
          <img
            src="/madison.png"
            alt="Business Partner Logo"
            className="h-16 w-40 bg-white shadow-md"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
