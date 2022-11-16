import React from "react";
import Link from "next/link";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

const awsBucketUrl = "https://d1qlwo81ldzrjs.cloudfront.net/prod/";

export const Footer = () => {
  const footerLinks = [
    {
      label: "About Us",
      url: "#about",
      to: "company",
    },
    {
      label: "Partnerships",
      url: "#partnerships",
      to: "company",
    },
    {
      label: "Announcements",
      url: "#announcements",
      to: "company",
    },
    {
      label: "Privacy Policy",
      url: "#privacy-policy",
      to: "legal",
    },
    {
      label: "Terms Of Use",
      url: "#terms-of-use",
      to: "legal",
    },
    {
      label: "Payers",
      url: "#payers",
      to: "healthcloud",
    },
    {
      label: "Providers",
      url: "#providers",
      to: "healthcloud",
    },
  ];

  const socialLinks = [
    {
      platform: "Facebook",
      link: "https://www.facebook.com/savannahinformatics",
      icon: FaFacebook,
    },
    {
      platform: "Twitter",
      link: "https://www.twitter.com/savannahinformatics",
      icon: FaTwitter,
    },
    {
      platform: "Linkedin",
      link: "https://www.instagram.com/savannahinformatics",
      icon: FaLinkedin,
    },
  ];
  return (
    <footer
      className="h-[40vh] flex flex-col items-start
     gap-4 bg-[#1C1C1C] sm:px-20 px-5 pt-10  text-white w-full
     "
    >
      <div className="flex">
        <Link href="/" className="text-lg font-bold mr-2">
          HealthCloud by
        </Link>
        <div className="h-full flex-1 flex items-center justify-start">
          <img
            src={`${awsBucketUrl}sil_logo_images/SLADE-Logo.png`}
            alt="SIL Logo"
            className="h-[100%] w-20 object-contain"
          />
        </div>
      </div>

      <section className="flex flex-1 items-start gap-4 p-0 sm:w-4/5 w-full">
        {/* Footer Links cont */}
        <div className="flex flex-1">
          <div className="flex flex-col flex-1 m-2">
            <h2 className="font-bold sm:text-md text-sm flex-1 flex items-end pb-2">
              Company
            </h2>
            <ul className="flex flex-col flex-grow w-full justify-around">
              {footerLinks.map(
                (siteLink, index) =>
                  siteLink.to === "company" && (
                    <li
                      className="cursor-pointer hover:text-primaryRed transition-all ease-out sm:text-md text-sm"
                      key={index}
                    >
                      <Link href={`/${siteLink.url}`}>{siteLink.label}</Link>
                    </li>
                  )
              )}
            </ul>
          </div>
          <div className="flex flex-col flex-1 m-2">
            <h2 className="font-bold sm:text-md text-sm flex-1 flex items-end pb-2">
              Legal
            </h2>
            <ul className="flex flex-col flex-grow w-full justify-around">
              {footerLinks.map(
                (siteLink, index) =>
                  siteLink.to === "legal" && (
                    <li
                      className="cursor-pointer hover:text-primaryRed transition-all ease-out sm:text-md text-sm"
                      key={index}
                    >
                      <Link href={`/${siteLink.url}`}>{siteLink.label}</Link>
                    </li>
                  )
              )}
            </ul>
          </div>

          <div className="flex flex-col flex-1 m-2">
            <h2 className="font-bold sm:text-md text-sm flex-1 flex items-end pb-2">
              HealthCloud for
            </h2>
            <ul className="flex flex-col flex-grow w-full justify-around">
              {footerLinks.map(
                (siteLink, index) =>
                  siteLink.to === "healthcloud" && (
                    <li
                      className="cursor-pointer hover:text-primaryRed transition-all ease-out sm:text-md text-sm"
                      key={index}
                    >
                      <Link href={`/${siteLink.url}`}>{siteLink.label}</Link>
                    </li>
                  )
              )}
            </ul>
          </div>
        </div>

        {/* Social Links */}

        <div className="flex flex-col  m-2">
          <h2 className="font-bold sm:text-md text-sm flex-1 flex items-end pb-2">
            Follow Us
          </h2>
          <div className="flex w-full justify-around">
            {socialLinks.map((social, index) => (
              <Link href={social.link} key={index} target="_blank">
                <social.icon
                  className="text-xl hover:text-brandColor transition-all ease-in mx-2"
                  title={social.platform}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Copyright */}
      <span className="w-full text-xs py-6 flex items-center justify-center border-t-[1px] ">
        Copyright &copy;
        <a href="https://savannahinformatics.com" target={"_blank"}>
          2022 HealthCloud by Slade360
        </a>
      </span>
    </footer>
  );
};
