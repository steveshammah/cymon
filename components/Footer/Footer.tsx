import React from "react";
import Link from "next/link";
import { FaTwitter, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

export const footerLinks = [
  {
    label: "Blog",
    url: "https://medium.com/fourbic",
  },
  {
    label: "About Us",
    url: "https://fourbic.com/index.html#about-area_section",
  },

  {
    label: "Privacy Policy",
    url: "https://fourbic.com/privacy-policy.md",
  },
  {
    label: "Terms Of Use",
    url: "https://fourbic.com/Terms_&_Conditions.md",
  },
];
const Footer = () => {
  const socialLinks = [
    {
      platform: "Facebook",
      link: "https://www.facebook.com/fourb1c",
      icon: FaFacebook,
    },
    {
      platform: "Instagram",
      link: "https://www.instagram.com/fourb1c/",
      icon: FaInstagram,
    },
    {
      platform: "Twitter",
      link: "https://twitter.com/fourb1c",
      icon: FaTwitter,
    },
    {
      platform: "Linkedin",
      link: "https://www.linkedin.com/company/fourbic/",
      icon: FaLinkedin,
    },
  ];
  return (
    <footer className="min-h-fit h-[30vh] flex flex-col items-start  text-white w-full">
      {/* Social Links */}
      <div className="flex flex-col w-full py-8 flex-1 bg-primary">
        <div className="flex w-full justify-center items-center h-full">
          {socialLinks.map((social, index) => (
            <Link href={social.link} key={index} target="_blank">
              <social.icon
                className="lg:text-4xl text-2xl hover:text-secondary transition-all ease-in mx-6"
                title={social.platform}
              />
            </Link>
          ))}
        </div>
      </div>

      <div className="flex justify-between bg-primary bg-opacity-90 w-full py-4 px-1">
        <div className="flex flex-1 items-center justify-center">
          <ul className="flex flex-grow w-full justify-around">
            {footerLinks.map((siteLink, index) => (
              <li className="cursor-pointer text-sm" key={index}>
                <Link href={`${siteLink.url}`} target="_blank">
                  {siteLink.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Copyright */}
        <span className="text-xs  flex items-center justify-center  ">
          Copyright &copy;
          <Link href="https://fourbic.com/" target={"_blank"}>
            {new Date().getFullYear()} CYMON by{" "}
            <span className="text-secondary font-bold">Fourbic</span>
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
