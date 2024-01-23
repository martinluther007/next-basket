import Link from "next/link";
import React from "react";

type FooterItems = {
  text: string;
  link: string;
};

type FooterLinks = {
  heading: string;
  items: FooterItems[];
};
const footerLinks: FooterLinks[] = [
  {
    heading: "Company Info",
    items: [
      {
        text: "About Us",
        link: "/",
      },
      {
        text: "Carrier",
        link: "/",
      },
      {
        text: "We are hiring",
        link: "/",
      },
      {
        text: "blog",
        link: "/",
      },
    ],
  },
  {
    heading: "legal",
    items: [
      {
        text: "About Us",
        link: "/",
      },
      {
        text: "Carrier",
        link: "/",
      },
      {
        text: "We are hiring",
        link: "/",
      },
      {
        text: "blog",
        link: "/",
      },
    ],
  },
  {
    heading: "features",
    items: [
      {
        text: "Business Marketing",
        link: "/",
      },
      {
        text: "User Analytic",
        link: "/",
      },
      {
        text: "Live Chat",
        link: "/",
      },
      {
        text: "Unlimited Support",
        link: "/",
      },
    ],
  },
  {
    heading: "Resources",
    items: [
      {
        text: "IOS & Android",
        link: "/",
      },
      {
        text: "Watch a Demo",
        link: "/",
      },
      {
        text: "Customers",
        link: "/",
      },
      {
        text: "API",
        link: "/",
      },
    ],
  },
];

const FooterLink = ({
  heading,
  items,
}: {
  heading: string;
  items: FooterItems[];
}) => {
  return (
    <ul className="mt-6 lg:mt-0">
      <h2 className="text-textColor  font-bold capitalize">{heading}</h2>
      {items.map((el, index) => (
        <li
          key={index}
          className="text-sm mt-2 capitalize text-secondaryTextColor font-bold"
        >
          <Link href={el.link}>{el.text}</Link>
        </li>
      ))}
    </ul>
  );
};

const Footer = () => {
  return (
    <>
      <footer className="px-10 sm:px-20 xl:px-60 py-16">
        <div className=" grid grid-cols-1 sm:grid-cols-3 lg:flex justify-between">
          {footerLinks.map((el, index) => (
            <FooterLink heading={el.heading} key={index} items={el.items} />
          ))}
          <ul className="mt-6 lg:mt-0">
            <h2 className="text-textColor capitalize font-bold">
              Get In Touch
            </h2>
            <div className="relative mt-2 w-full sm:w-[250px]">
              <input
                className="border rounded py-1.5 px-2.5 w-full sm:w-[200px] placeholder:capitalize placeholder:text-secondaryTextColor placeholder:text-sm   bg-[#E6E6E6]"
                placeholder="your email"
                type="text"
              />
              <button className="bg-primary rounded-r text-sm py-1.5 px-2.5 absolute inset-y-0 right-0  capitalize text-white">
                subscribe
              </button>
            </div>
          </ul>
        </div>
      </footer>
      <div className="py-10 text-center px-10 md:px-60 bg-[#FAFAFA]">
        <p className="text-secondaryTextColor font-bold text-sm">
          Made With Love By Finland All Right Reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
