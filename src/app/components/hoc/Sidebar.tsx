"use client";
import React, { ReactNode, useState } from "react";
import Link from "next/link";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "500", "600", "700"],
});

const sideBarItems = {
  main: [
    {
      text: "home",
    },
    {
      text: "shop",
    },
    {
      text: "about",
    },
    {
      text: "blog",
    },
    {
      text: "contact",
    },
    {
      text: "pages",
    },
  ],

  sub: [
    {
      selector: () => (
        <svg
          width="46"
          height="46"
          viewBox="0 0 46 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_540_801)">
            <g clip-path="url(#clip1_540_801)">
              <g clip-path="url(#clip2_540_801)">
                <path
                  d="M26.7426 25.3441C27.7109 24.0228 28.1446 22.3846 27.9569 20.7572C27.7692 19.1299 26.974 17.6334 25.7304 16.5672C24.4867 15.501 22.8863 14.9437 21.2494 15.0068C19.6125 15.0699 18.0598 15.7487 16.9019 16.9074C15.7439 18.0662 15.0662 19.6194 15.0043 21.2563C14.9424 22.8933 15.5009 24.4933 16.568 25.7361C17.6351 26.979 19.1321 27.7732 20.7596 27.9597C22.3871 28.1462 24.025 27.7113 25.3456 26.7421H25.3446C25.3746 26.7821 25.4066 26.8201 25.4426 26.8571L29.2926 30.7071C29.4801 30.8947 29.7345 31.0002 29.9997 31.0003C30.265 31.0004 30.5195 30.8951 30.7071 30.7076C30.8947 30.5201 31.0002 30.2657 31.0003 30.0005C31.0004 29.7352 30.8951 29.4807 30.7076 29.2931L26.8576 25.4431C26.8218 25.4069 26.7834 25.3735 26.7426 25.3431V25.3441ZM27.0006 21.5001C27.0006 22.2224 26.8583 22.9376 26.5819 23.6049C26.3055 24.2722 25.9004 24.8785 25.3897 25.3892C24.879 25.8999 24.2726 26.305 23.6054 26.5814C22.9381 26.8578 22.2229 27.0001 21.5006 27.0001C20.7783 27.0001 20.0631 26.8578 19.3958 26.5814C18.7285 26.305 18.1222 25.8999 17.6115 25.3892C17.1008 24.8785 16.6957 24.2722 16.4193 23.6049C16.1429 22.9376 16.0006 22.2224 16.0006 21.5001C16.0006 20.0414 16.5801 18.6425 17.6115 17.611C18.643 16.5796 20.0419 16.0001 21.5006 16.0001C22.9593 16.0001 24.3582 16.5796 25.3897 17.611C26.4211 18.6425 27.0006 20.0414 27.0006 21.5001Z"
                  fill="#23A6F0"
                />
              </g>
            </g>
          </g>
          <defs>
            <clipPath id="clip0_540_801">
              <rect
                width="46.0006"
                height="46.0003"
                fill="white"
                transform="translate(-0.000305176)"
              />
            </clipPath>
            <clipPath id="clip1_540_801">
              <rect
                width="46.0006"
                height="46.0003"
                fill="white"
                transform="translate(-0.000305176)"
              />
            </clipPath>
            <clipPath id="clip2_540_801">
              <rect
                width="16.0006"
                height="16.0003"
                fill="white"
                transform="translate(14.9997 15)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
      mobileSelector: () => (
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_541_193)">
            <path
              d="M39.9527 36.9806C42.0103 34.1728 42.9318 30.6917 42.533 27.2337C42.1342 23.7756 40.4445 20.5957 37.8018 18.3301C35.1591 16.0644 31.7585 14.8801 28.2802 15.0142C24.8019 15.1482 21.5024 16.5906 19.042 19.0529C16.5815 21.5152 15.1414 24.8157 15.0099 28.2942C14.8783 31.7727 16.065 35.1726 18.3325 37.8136C20.6 40.4547 23.7811 42.1422 27.2394 42.5386C30.6976 42.9349 34.178 42.0108 36.9842 39.9512H36.9821C37.0458 40.0362 37.1138 40.117 37.1903 40.1956L45.3713 48.3767C45.7697 48.7754 46.3102 48.9996 46.8739 48.9998C47.4376 49 47.9782 48.7762 48.377 48.3778C48.7757 47.9793 48.9998 47.4388 49 46.8751C49.0002 46.3114 48.7765 45.7708 48.378 45.372L40.1971 37.1909C40.1211 37.114 40.0394 37.043 39.9527 36.9784V36.9806ZM40.5009 28.8122C40.5009 30.347 40.1987 31.8668 39.6113 33.2847C39.024 34.7027 38.1631 35.9911 37.0779 37.0764C35.9926 38.1616 34.7043 39.0225 33.2863 39.6098C31.8684 40.1972 30.3487 40.4995 28.8139 40.4995C27.2791 40.4995 25.7594 40.1972 24.3414 39.6098C22.9235 39.0225 21.6351 38.1616 20.5499 37.0764C19.4646 35.9911 18.6038 34.7027 18.0165 33.2847C17.4291 31.8668 17.1268 30.347 17.1268 28.8122C17.1268 25.7126 18.3581 22.7398 20.5499 20.5481C22.7416 18.3563 25.7143 17.1249 28.8139 17.1249C31.9135 17.1249 34.8861 18.3563 37.0779 20.5481C39.2696 22.7398 40.5009 25.7126 40.5009 28.8122Z"
              fill="#23A6F0"
            />
          </g>
          <defs>
            <clipPath id="clip0_541_193">
              <rect
                width="34"
                height="34"
                fill="white"
                transform="translate(15 15)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      selector: (style?: string) => (
        <svg
          className={style}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_540_809)">
            <path
              d="M0.000305176 1.5C0.000305176 1.36739 0.0529836 1.24021 0.146752 1.14645C0.24052 1.05268 0.367697 1 0.500305 1H2.00031C2.11184 1.00003 2.22016 1.03735 2.30804 1.10602C2.39592 1.1747 2.45831 1.27078 2.48531 1.379L2.89031 3H14.5003C14.5737 3.00007 14.6462 3.0163 14.7127 3.04755C14.7791 3.0788 14.8378 3.12429 14.8847 3.1808C14.9316 3.23731 14.9654 3.30345 14.9838 3.37452C15.0023 3.44558 15.0048 3.51984 14.9913 3.592L13.4913 11.592C13.4699 11.7066 13.409 11.8101 13.3194 11.8846C13.2297 11.9591 13.1169 11.9999 13.0003 12H4.00031C3.88374 11.9999 3.77087 11.9591 3.68122 11.8846C3.59156 11.8101 3.53075 11.7066 3.50931 11.592L2.01031 3.607L1.61031 2H0.500305C0.367697 2 0.24052 1.94732 0.146752 1.85355C0.0529836 1.75979 0.000305176 1.63261 0.000305176 1.5ZM3.10231 4L4.41531 11H12.5853L13.8983 4H3.10231ZM5.00031 12C4.46987 12 3.96116 12.2107 3.58609 12.5858C3.21102 12.9609 3.00031 13.4696 3.00031 14C3.00031 14.5304 3.21102 15.0391 3.58609 15.4142C3.96116 15.7893 4.46987 16 5.00031 16C5.53074 16 6.03945 15.7893 6.41452 15.4142C6.78959 15.0391 7.00031 14.5304 7.00031 14C7.00031 13.4696 6.78959 12.9609 6.41452 12.5858C6.03945 12.2107 5.53074 12 5.00031 12ZM12.0003 12C11.4699 12 10.9612 12.2107 10.5861 12.5858C10.211 12.9609 10.0003 13.4696 10.0003 14C10.0003 14.5304 10.211 15.0391 10.5861 15.4142C10.9612 15.7893 11.4699 16 12.0003 16C12.5307 16 13.0394 15.7893 13.4145 15.4142C13.7896 15.0391 14.0003 14.5304 14.0003 14C14.0003 13.4696 13.7896 12.9609 13.4145 12.5858C13.0394 12.2107 12.5307 12 12.0003 12ZM5.00031 13C5.26552 13 5.51988 13.1054 5.70741 13.2929C5.89495 13.4804 6.00031 13.7348 6.00031 14C6.00031 14.2652 5.89495 14.5196 5.70741 14.7071C5.51988 14.8946 5.26552 15 5.00031 15C4.73509 15 4.48073 14.8946 4.2932 14.7071C4.10566 14.5196 4.00031 14.2652 4.00031 14C4.00031 13.7348 4.10566 13.4804 4.2932 13.2929C4.48073 13.1054 4.73509 13 5.00031 13ZM12.0003 13C12.2655 13 12.5199 13.1054 12.7074 13.2929C12.8949 13.4804 13.0003 13.7348 13.0003 14C13.0003 14.2652 12.8949 14.5196 12.7074 14.7071C12.5199 14.8946 12.2655 15 12.0003 15C11.7351 15 11.4807 14.8946 11.2932 14.7071C11.1057 14.5196 11.0003 14.2652 11.0003 14C11.0003 13.7348 11.1057 13.4804 11.2932 13.2929C11.4807 13.1054 11.7351 13 12.0003 13Z"
              fill="#23A6F0"
            />
          </g>
          <defs>
            <clipPath id="clip0_540_809">
              <rect
                width="16"
                height="16"
                fill="white"
                transform="translate(0.000305176)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
      mobileSelector: (style?: string) => (
        <svg
          className={style}
          width="36"
          height="35"
          viewBox="0 0 36 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.5 1.46875C0.5 1.16209 0.621819 0.867997 0.838658 0.651158C1.0555 0.434319 1.34959 0.3125 1.65625 0.3125H5.125C5.38292 0.312571 5.6334 0.398873 5.83663 0.557682C6.03985 0.716491 6.18415 0.938688 6.24656 1.18894L7.18313 4.9375H34.0312C34.201 4.93766 34.3687 4.9752 34.5223 5.04746C34.6759 5.11972 34.8118 5.22493 34.9202 5.35561C35.0285 5.48629 35.1068 5.63923 35.1494 5.80357C35.192 5.96791 35.1979 6.13962 35.1667 6.3065L31.6979 24.8065C31.6483 25.0715 31.5077 25.3108 31.3004 25.483C31.0931 25.6553 30.8321 25.7498 30.5625 25.75H9.75C9.48044 25.7498 9.21943 25.6553 9.01211 25.483C8.80478 25.3108 8.66416 25.0715 8.61456 24.8065L5.14813 6.34119L4.22312 2.625H1.65625C1.34959 2.625 1.0555 2.50318 0.838658 2.28634C0.621819 2.0695 0.5 1.77541 0.5 1.46875ZM7.67338 7.25L10.7097 23.4375H29.6028L32.6391 7.25H7.67338ZM12.0625 25.75C10.8359 25.75 9.65949 26.2373 8.79213 27.1046C7.92478 27.972 7.4375 29.1484 7.4375 30.375C7.4375 31.6016 7.92478 32.778 8.79213 33.6454C9.65949 34.5127 10.8359 35 12.0625 35C13.2891 35 14.4655 34.5127 15.3329 33.6454C16.2002 32.778 16.6875 31.6016 16.6875 30.375C16.6875 29.1484 16.2002 27.972 15.3329 27.1046C14.4655 26.2373 13.2891 25.75 12.0625 25.75ZM28.25 25.75C27.0234 25.75 25.847 26.2373 24.9796 27.1046C24.1123 27.972 23.625 29.1484 23.625 30.375C23.625 31.6016 24.1123 32.778 24.9796 33.6454C25.847 34.5127 27.0234 35 28.25 35C29.4766 35 30.653 34.5127 31.5204 33.6454C32.3877 32.778 32.875 31.6016 32.875 30.375C32.875 29.1484 32.3877 27.972 31.5204 27.1046C30.653 26.2373 29.4766 25.75 28.25 25.75ZM12.0625 28.0625C12.6758 28.0625 13.264 28.3061 13.6977 28.7398C14.1314 29.1735 14.375 29.7617 14.375 30.375C14.375 30.9883 14.1314 31.5765 13.6977 32.0102C13.264 32.4439 12.6758 32.6875 12.0625 32.6875C11.4492 32.6875 10.861 32.4439 10.4273 32.0102C9.99364 31.5765 9.75 30.9883 9.75 30.375C9.75 29.7617 9.99364 29.1735 10.4273 28.7398C10.861 28.3061 11.4492 28.0625 12.0625 28.0625ZM28.25 28.0625C28.8633 28.0625 29.4515 28.3061 29.8852 28.7398C30.3189 29.1735 30.5625 29.7617 30.5625 30.375C30.5625 30.9883 30.3189 31.5765 29.8852 32.0102C29.4515 32.4439 28.8633 32.6875 28.25 32.6875C27.6367 32.6875 27.0485 32.4439 26.6148 32.0102C26.1811 31.5765 25.9375 30.9883 25.9375 30.375C25.9375 29.7617 26.1811 29.1735 26.6148 28.7398C27.0485 28.3061 27.6367 28.0625 28.25 28.0625Z"
            fill="#23A6F0"
          />
        </svg>
      ),
    },
    {
      selector: () => (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_540_815)">
            <path
              d="M8.0002 2.74805L7.2832 2.01105C5.6002 0.281049 2.5142 0.878049 1.4002 3.05305C0.8772 4.07605 0.7592 5.55305 1.7142 7.43805C2.6342 9.25305 4.5482 11.427 8.0002 13.795C11.4522 11.427 13.3652 9.25305 14.2862 7.43805C15.2412 5.55205 15.1242 4.07605 14.6002 3.05305C13.4862 0.878049 10.4002 0.280049 8.7172 2.01005L8.0002 2.74805ZM8.0002 15C-7.3328 4.86805 3.2792 -3.03995 7.8242 1.14305C7.8842 1.19805 7.9432 1.25505 8.0002 1.31405C8.05662 1.2551 8.11533 1.19839 8.1762 1.14405C12.7202 -3.04195 23.3332 4.86705 8.0002 15Z"
              fill="#23A6F0"
            />
          </g>
          <defs>
            <clipPath id="clip0_540_815">
              <rect
                width="16"
                height="16"
                fill="white"
                transform="translate(0.000305176)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
      mobileSelector: (style?: string) => (
        <svg
          className={style}
          width="30"
          height="28"
          viewBox="0 0 30 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.9998 4.98084L13.7002 3.64503C10.6498 0.5094 5.05643 1.59146 3.03731 5.53365C2.08937 7.38784 1.8755 10.0649 3.60643 13.4815C5.27393 16.7712 8.74306 20.7115 14.9998 25.0035C21.2566 20.7115 24.7239 16.7712 26.3932 13.4815C28.1241 10.0631 27.9121 7.38784 26.9623 5.53365C24.9432 1.59146 19.3498 0.507588 16.2994 3.64321L14.9998 4.98084ZM14.9998 27.1876C-12.7913 8.82334 6.443 -5.50991 14.6808 2.07178C14.7896 2.17146 14.8965 2.27478 14.9998 2.38171C15.1021 2.27487 15.2085 2.17209 15.3188 2.07359C23.5548 -5.51354 42.7909 8.82152 14.9998 27.1876Z"
            fill="#23A6F0"
          />
        </svg>
      ),
    },
  ],
};

const SideBarLink = ({
  children,
  ...props
}: {
  children: string | ReactNode;
  className?: string;
}) => {
  return (
    <>
      <li {...props}>
        <Link href="/">{children}</Link>
      </li>
    </>
  );
};

export const NavHandler = ({
  onTabIsActive,
  isActive,
}: {
  onTabIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  isActive: boolean;
}) => (
  <div className="flex justify-between py-10 px-5 sm:px-20">
    <h2 className="text-textColor text-2xl capitalize font-bold">Bandage</h2>
    <button onClick={() => onTabIsActive(!isActive)}>
      <svg
        width="24"
        height="14"
        viewBox="0 0 24 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.571533 0H23.4287V2.28571H0.571533V0ZM6.28582 5.71429H23.4287V8H6.28582V5.71429ZM13.4287 11.4286H23.4287V13.7143H13.4287V11.4286Z"
          fill="#737373"
        />
      </svg>
    </button>
  </div>
);

export const MobileSidebar = () => {
  const [tabsIsActive, setTabsIsActive] = useState(false);

  return (
    <div className=" block md:hidden ">
      <NavHandler onTabIsActive={setTabsIsActive} isActive={tabsIsActive} />
      <nav
        className={`fixed overflow-y-scroll transition-all duration-500 z-50 w-screen bg-white h-screen inset-0 ${
          !tabsIsActive && "hidden"
        }`}
      >
        <NavHandler onTabIsActive={setTabsIsActive} isActive={tabsIsActive} />

        <ul className=" py-10 text-center">
          {sideBarItems.main.map((ele, index) => (
            <SideBarLink
              className="mt-3.5 capitalize text-secondaryTextColor text-3xl"
              key={index}
            >
              {ele.text}
            </SideBarLink>
          ))}
        </ul>

        <ul className=" flex flex-col items-center  py-10 text-center">
          {sideBarItems.sub.map((ele, index) => (
            <SideBarLink
              className="mt-3.5 capitalize text-secondaryTextColor text-3xl"
              key={index}
            >
              <div>{ele.mobileSelector("mt-5")}</div>
            </SideBarLink>
          ))}
        </ul>
      </nav>
    </div>
  );
};

const Sidebar = () => {
  return (
    <>
      <div
        className={`bg-secondary hidden lg:flex text-sm xl:text-base text-white  w-full p-3.5 justify-between items-center font-bold ${montserrat.className}`}
      >
        <div className="flex items-center">
          <div className="flex items-center">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.65447 1.32829C3.59544 1.25236 3.52092 1.18985 3.43587 1.14492C3.35082 1.09999 3.25719 1.07368 3.16119 1.06772C3.06519 1.06176 2.96902 1.07629 2.87907 1.11036C2.78912 1.14442 2.70744 1.19724 2.63947 1.26529L1.60547 2.30029C1.12247 2.78429 0.944471 3.4693 1.15547 4.0703C2.03121 6.55788 3.45577 8.81639 5.32347 10.6783C7.1854 12.546 9.4439 13.9705 11.9315 14.8463C12.5325 15.0573 13.2175 14.8793 13.7015 14.3963L14.7355 13.3623C14.8035 13.2943 14.8563 13.2127 14.8904 13.1227C14.9245 13.0327 14.939 12.9366 14.933 12.8406C14.9271 12.7446 14.9008 12.6509 14.8558 12.5659C14.8109 12.4808 14.7484 12.4063 14.6725 12.3473L12.3655 10.5533C12.2843 10.4904 12.19 10.4467 12.0895 10.4256C11.989 10.4044 11.8851 10.4064 11.7855 10.4313L9.59547 10.9783C9.30315 11.0514 8.99689 11.0475 8.70652 10.967C8.41614 10.8866 8.15154 10.7324 7.93847 10.5193L5.48247 8.06229C5.26924 7.84933 5.1148 7.58478 5.03418 7.29439C4.95357 7.00401 4.94954 6.6977 5.02247 6.4053L5.57047 4.2153C5.59538 4.11569 5.59734 4.01173 5.57621 3.91126C5.55507 3.81079 5.51139 3.71642 5.44847 3.63529L3.65447 1.32829ZM1.88447 0.511295C2.05947 0.336244 2.2697 0.200425 2.50121 0.112856C2.73272 0.0252871 2.98021 -0.0120282 3.22725 0.00338804C3.47429 0.0188043 3.71522 0.0865995 3.93405 0.202272C4.15288 0.317944 4.3446 0.478846 4.49647 0.674295L6.29047 2.98029C6.61947 3.4033 6.73547 3.9543 6.60547 4.4743L6.05847 6.6643C6.03019 6.77772 6.03172 6.89654 6.06291 7.0092C6.0941 7.12187 6.15388 7.22456 6.23647 7.3073L8.69347 9.76429C8.77631 9.84705 8.87916 9.90694 8.99202 9.93813C9.10488 9.96933 9.22389 9.97076 9.33747 9.9423L11.5265 9.3953C11.7831 9.33113 12.0509 9.32615 12.3098 9.38072C12.5686 9.43529 12.8116 9.54799 13.0205 9.71029L15.3265 11.5043C16.1555 12.1493 16.2315 13.3743 15.4895 14.1153L14.4555 15.1493C13.7155 15.8893 12.6095 16.2143 11.5785 15.8513C8.93965 14.9228 6.54374 13.4121 4.56847 11.4313C2.58776 9.45631 1.07708 7.06075 0.148471 4.4223C-0.213529 3.3923 0.111471 2.2853 0.851471 1.54529L1.88547 0.511295H1.88447Z"
                fill="white"
              />
            </svg>

            <p className=" font-bold ml-1.5">(225) 555-0118</p>
          </div>
          <div className="flex items-center ml-3.5">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_540_707)">
                <path
                  d="M-0.499496 4C-0.499496 3.46957 -0.288783 2.96086 0.08629 2.58579C0.461363 2.21071 0.970071 2 1.5005 2H13.5005C14.0309 2 14.5396 2.21071 14.9147 2.58579C15.2898 2.96086 15.5005 3.46957 15.5005 4V12C15.5005 12.5304 15.2898 13.0391 14.9147 13.4142C14.5396 13.7893 14.0309 14 13.5005 14H1.5005C0.970071 14 0.461363 13.7893 0.08629 13.4142C-0.288783 13.0391 -0.499496 12.5304 -0.499496 12V4ZM1.5005 3C1.23529 3 0.980933 3.10536 0.793397 3.29289C0.60586 3.48043 0.500504 3.73478 0.500504 4V4.217L7.5005 8.417L14.5005 4.217V4C14.5005 3.73478 14.3951 3.48043 14.2076 3.29289C14.0201 3.10536 13.7657 3 13.5005 3H1.5005ZM14.5005 5.383L9.7425 8.238L14.5005 11.114V5.384V5.383ZM14.4665 12.261L8.7715 8.82L7.5005 9.583L6.2285 8.82L0.534504 12.26C0.591702 12.4724 0.717352 12.6601 0.891991 12.7938C1.06663 12.9276 1.28051 13.0001 1.5005 13H13.5005C13.7204 13.0001 13.9341 12.9278 14.1088 12.7942C14.2834 12.6607 14.4091 12.4732 14.4665 12.261ZM0.500504 11.114L5.2585 8.238L0.500504 5.383V11.113V11.114Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_540_707">
                  <rect
                    width="16"
                    height="16"
                    fill="white"
                    transform="translate(0.00050354)"
                  />
                </clipPath>
              </defs>
            </svg>

            <p className="ml-1.5">michelle.rivera@example.com</p>
          </div>
        </div>
        <div>
          <p>Follow Us and get a chance to win 80% off</p>
        </div>
        <div className="items-center flex">
          Follow Us :
          <Link href="/">
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 5C10.829 5 10.556 5.01 9.703 5.048C8.85 5.088 8.269 5.222 7.76 5.42C7.22609 5.62082 6.74249 5.93583 6.343 6.343C5.93608 6.7427 5.62111 7.22624 5.42 7.76C5.222 8.268 5.087 8.85 5.048 9.7C5.01 10.555 5 10.827 5 13.001C5 15.173 5.01 15.445 5.048 16.298C5.088 17.15 5.222 17.731 5.42 18.24C5.625 18.766 5.898 19.212 6.343 19.657C6.787 20.102 7.233 20.376 7.759 20.58C8.269 20.778 8.849 20.913 9.701 20.952C10.555 20.99 10.827 21 13 21C15.173 21 15.444 20.99 16.298 20.952C17.149 20.912 17.732 20.778 18.241 20.58C18.7746 20.3791 19.2578 20.0641 19.657 19.657C20.102 19.212 20.375 18.766 20.58 18.24C20.777 17.731 20.912 17.15 20.952 16.298C20.99 15.445 21 15.173 21 13C21 10.827 20.99 10.555 20.952 9.701C20.912 8.85 20.777 8.268 20.58 7.76C20.3789 7.22623 20.0639 6.74268 19.657 6.343C19.2576 5.93568 18.774 5.62065 18.24 5.42C17.73 5.222 17.148 5.087 16.297 5.048C15.443 5.01 15.172 5 12.998 5H13.001H13ZM12.283 6.442H13.001C15.137 6.442 15.39 6.449 16.233 6.488C17.013 6.523 17.437 6.654 17.719 6.763C18.092 6.908 18.359 7.082 18.639 7.362C18.919 7.642 19.092 7.908 19.237 8.282C19.347 8.563 19.477 8.987 19.512 9.767C19.551 10.61 19.559 10.863 19.559 12.998C19.559 15.133 19.551 15.387 19.512 16.23C19.477 17.01 19.346 17.433 19.237 17.715C19.1087 18.0624 18.904 18.3764 18.638 18.634C18.358 18.914 18.092 19.087 17.718 19.232C17.438 19.342 17.014 19.472 16.233 19.508C15.39 19.546 15.137 19.555 13.001 19.555C10.865 19.555 10.611 19.546 9.768 19.508C8.988 19.472 8.565 19.342 8.283 19.232C7.9355 19.1039 7.62113 18.8996 7.363 18.634C7.09675 18.376 6.89172 18.0617 6.763 17.714C6.654 17.433 6.523 17.009 6.488 16.229C6.45 15.386 6.442 15.133 6.442 12.996C6.442 10.86 6.45 10.608 6.488 9.765C6.524 8.985 6.654 8.561 6.764 8.279C6.909 7.906 7.083 7.639 7.363 7.359C7.643 7.079 7.909 6.906 8.283 6.761C8.565 6.651 8.988 6.521 9.768 6.485C10.506 6.451 10.792 6.441 12.283 6.44V6.442ZM17.271 7.77C17.1449 7.77 17.0201 7.79483 16.9036 7.84308C16.7872 7.89132 16.6813 7.96203 16.5922 8.05118C16.503 8.14032 16.4323 8.24615 16.3841 8.36262C16.3358 8.4791 16.311 8.60393 16.311 8.73C16.311 8.85607 16.3358 8.9809 16.3841 9.09738C16.4323 9.21385 16.503 9.31968 16.5922 9.40882C16.6813 9.49797 16.7872 9.56868 16.9036 9.61692C17.0201 9.66517 17.1449 9.69 17.271 9.69C17.5256 9.69 17.7698 9.58886 17.9498 9.40882C18.1299 9.22879 18.231 8.98461 18.231 8.73C18.231 8.47539 18.1299 8.23121 17.9498 8.05118C17.7698 7.87114 17.5256 7.77 17.271 7.77ZM13.001 8.892C12.4561 8.8835 11.9149 8.98349 11.409 9.18614C10.9031 9.3888 10.4425 9.69007 10.0542 10.0724C9.66579 10.4548 9.35736 10.9106 9.14684 11.4133C8.93632 11.916 8.8279 12.4555 8.8279 13.0005C8.8279 13.5455 8.93632 14.085 9.14684 14.5877C9.35736 15.0904 9.66579 15.5462 10.0542 15.9286C10.4425 16.3109 10.9031 16.6122 11.409 16.8149C11.9149 17.0175 12.4561 17.1175 13.001 17.109C14.0795 17.0922 15.1082 16.6519 15.865 15.8833C16.6217 15.1146 17.0459 14.0792 17.0459 13.0005C17.0459 11.9218 16.6217 10.8864 15.865 10.1177C15.1082 9.34909 14.0795 8.90883 13.001 8.892ZM13.001 10.333C13.7083 10.333 14.3867 10.614 14.8869 11.1141C15.387 11.6143 15.668 12.2927 15.668 13C15.668 13.7073 15.387 14.3857 14.8869 14.8859C14.3867 15.386 13.7083 15.667 13.001 15.667C12.2937 15.667 11.6153 15.386 11.1151 14.8859C10.615 14.3857 10.334 13.7073 10.334 13C10.334 12.2927 10.615 11.6143 11.1151 11.1141C11.6153 10.614 12.2937 10.333 13.001 10.333Z"
                fill="white"
              />
            </svg>
          </Link>
          <Link href="/">
            <svg
              width="27"
              height="26"
              viewBox="0 0 27 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_540_718)">
                <path
                  d="M14.051 6.99902H14.14C14.962 7.00202 19.127 7.03202 20.25 7.33402C20.5895 7.42619 20.8989 7.60585 21.1472 7.85503C21.3955 8.10422 21.574 8.41421 21.665 8.75402C21.766 9.13402 21.837 9.63702 21.885 10.156L21.895 10.26L21.917 10.52L21.925 10.624C21.99 11.538 21.998 12.394 21.999 12.581V12.656C21.998 12.85 21.989 13.764 21.917 14.716L21.909 14.821L21.9 14.925C21.85 15.497 21.776 16.065 21.665 16.483C21.5743 16.823 21.3958 17.1331 21.1475 17.3823C20.8991 17.6316 20.5896 17.8111 20.25 17.903C19.09 18.215 14.681 18.237 14.07 18.238H13.928C13.619 18.238 12.341 18.232 11.001 18.186L10.831 18.18L10.744 18.176L10.573 18.169L10.402 18.162C9.292 18.113 8.235 18.034 7.748 17.902C7.40849 17.8102 7.09907 17.6308 6.85072 17.3818C6.60238 17.1327 6.42385 16.8228 6.333 16.483C6.222 16.066 6.148 15.497 6.098 14.925L6.09 14.82L6.082 14.716C6.03265 14.0384 6.0053 13.3594 6 12.68L6 12.557C6.002 12.342 6.01 11.599 6.064 10.779L6.071 10.676L6.074 10.624L6.082 10.52L6.104 10.26L6.114 10.156C6.162 9.63702 6.233 9.13302 6.334 8.75402C6.42469 8.41407 6.60316 8.10393 6.85151 7.85471C7.09986 7.60548 7.40937 7.42592 7.749 7.33402C8.236 7.20402 9.293 7.12402 10.403 7.07402L10.573 7.06702L10.745 7.06102L10.831 7.05802L11.002 7.05102C11.9537 7.0204 12.9058 7.0034 13.858 7.00002H14.051V6.99902ZM12.4 10.209V15.027L16.557 12.619L12.4 10.209Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_540_718">
                  <rect
                    width="16"
                    height="16"
                    fill="white"
                    transform="translate(5.5 5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </Link>
          <Link href="/">
            <svg
              width="27"
              height="26"
              viewBox="0 0 27 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_540_721)">
                <path
                  d="M21.002 13.05C21.002 8.604 17.42 5 13.002 5C8.582 5.001 5 8.604 5 13.051C5 17.068 7.926 20.398 11.75 21.002V15.377H9.72V13.051H11.752V11.276C11.752 9.259 12.947 8.145 14.774 8.145C15.65 8.145 16.565 8.302 16.565 8.302V10.282H15.556C14.563 10.282 14.253 10.903 14.253 11.54V13.05H16.471L16.117 15.376H14.252V21.001C18.076 20.397 21.002 17.067 21.002 13.05Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_540_721">
                  <rect
                    width="16"
                    height="16"
                    fill="white"
                    transform="translate(5.5 5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </Link>
          <Link href="/">
            <svg
              width="27"
              height="26"
              viewBox="0 0 27 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_540_724)">
                <path
                  d="M10.026 19.0007C16.064 19.0007 19.367 13.9977 19.367 9.66669C19.367 9.52669 19.367 9.38469 19.361 9.24469C20.0041 8.77918 20.5591 8.20284 21 7.54269C20.3993 7.80754 19.7628 7.9821 19.111 8.06069C19.7975 7.65033 20.3117 7.00466 20.558 6.24369C19.913 6.62582 19.207 6.89407 18.471 7.03669C17.9762 6.50972 17.3214 6.16061 16.6081 6.04345C15.8948 5.92629 15.1627 6.04761 14.5253 6.38863C13.888 6.72965 13.3808 7.27132 13.0824 7.92975C12.7841 8.58818 12.7112 9.32663 12.875 10.0307C11.5697 9.96524 10.2928 9.62616 9.12704 9.03544C7.96127 8.44471 6.93268 7.61554 6.108 6.60169C5.68934 7.32478 5.56157 8.18009 5.75065 8.99396C5.93972 9.80782 6.43145 10.5192 7.126 10.9837C6.60554 10.966 6.09652 10.8263 5.64 10.5757V10.6207C5.6409 11.3782 5.90331 12.1121 6.38287 12.6985C6.86244 13.2848 7.52975 13.6876 8.272 13.8387C7.99026 13.9163 7.69923 13.955 7.407 13.9537C7.20098 13.9543 6.99538 13.9352 6.793 13.8967C7.00279 14.5487 7.41127 15.1189 7.96125 15.5272C8.51122 15.9355 9.17513 16.1615 9.86 16.1737C8.69656 17.0875 7.2594 17.5831 5.78 17.5807C5.51932 17.5818 5.25882 17.5668 5 17.5357C6.50151 18.493 8.2453 19.0012 10.026 19.0007Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_540_724">
                  <rect
                    width="16"
                    height="16"
                    fill="white"
                    transform="translate(5.5 5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </Link>
        </div>
      </div>
      <nav
        className={`w-full p-3.5   hidden md:flex items-center ${montserrat.className}`}
      >
        <div className="mr-3 lg:mr-20  ">
          <h2 className="text-textColor font-bold text-2xl">Bandage</h2>
        </div>
        <div className="  flex-1 justify-between  flex  items-center">
          <ul className="flex  ">
            {sideBarItems.main.map((ele, index) => (
              <SideBarLink
                className="mr-3.5 capitalize font-bold text-secondaryTextColor text-sm"
                key={index}
              >
                {ele.text}
              </SideBarLink>
            ))}
          </ul>

          <ul className="flex items-center">
            <li className="flex text-primary text-sm capitalize font-bold items-center">
              <svg
                className="mr-1.5"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.99969 6C6.79534 6 7.55841 5.68393 8.12102 5.12132C8.68362 4.55871 8.99969 3.79565 8.99969 3C8.99969 2.20435 8.68362 1.44129 8.12102 0.87868C7.55841 0.316071 6.79534 0 5.99969 0C5.20405 0 4.44098 0.316071 3.87837 0.87868C3.31577 1.44129 2.99969 2.20435 2.99969 3C2.99969 3.79565 3.31577 4.55871 3.87837 5.12132C4.44098 5.68393 5.20405 6 5.99969 6ZM7.99969 3C7.99969 3.53043 7.78898 4.03914 7.41391 4.41421C7.03884 4.78929 6.53013 5 5.99969 5C5.46926 5 4.96055 4.78929 4.58548 4.41421C4.21041 4.03914 3.99969 3.53043 3.99969 3C3.99969 2.46957 4.21041 1.96086 4.58548 1.58579C4.96055 1.21071 5.46926 1 5.99969 1C6.53013 1 7.03884 1.21071 7.41391 1.58579C7.78898 1.96086 7.99969 2.46957 7.99969 3ZM11.9997 11C11.9997 12 10.9997 12 10.9997 12H0.999695C0.999695 12 -0.000305176 12 -0.000305176 11C-0.000305176 10 0.999695 7 5.99969 7C10.9997 7 11.9997 10 11.9997 11ZM10.9997 10.996C10.9987 10.75 10.8457 10.01 10.1677 9.332C9.51569 8.68 8.28869 8 5.99969 8C3.70969 8 2.48369 8.68 1.83169 9.332C1.15369 10.01 1.00169 10.75 0.999695 10.996H10.9997Z"
                  fill="#23A6F0"
                />
              </svg>
              login / register
            </li>
            {sideBarItems.sub.map((ele, index) => (
              <SideBarLink key={index}>{ele.selector("mr-3")}</SideBarLink>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
