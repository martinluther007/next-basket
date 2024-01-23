import Image from "next/image";
import HeaderContainer from "./components/home/HeaderContainer";
import ProductCard from "./components/home/ProductCard";
import FeaturedCard from "./components/home/FeaturedCard";
import PostsCard from "./components/home/PostsCard";
import { headerData } from "./lib/header";
import { featuredPosts } from "./lib/posts";
import { reviewData } from "./lib/review";
import user from "@/assets/images/user.1.jpg";
import Rating from "./components/core/Rating";

import Layout from "./components/hoc/Layout";

const featuredProduct: FeaturedProducts[] = [
  {
    image: (
      <svg
        width="72"
        height="72"
        viewBox="0 0 72 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 24V58.587C6 58.587 19.863 58.071 36 66C52.137 58.071 66 58.587 66 58.587V24C66 24 49.638 24 36 31.413C22.362 24 6 24 6 24Z"
          fill="#23A6F0"
        />
        <path
          d="M36 24C40.9706 24 45 19.9706 45 15C45 10.0294 40.9706 6 36 6C31.0294 6 27 10.0294 27 15C27 19.9706 31.0294 24 36 24Z"
          fill="#23A6F0"
        />
      </svg>
    ),
    text: "Get your best looking smile now!",
    heading: "Easy Wins",
  },
  {
    image: (
      <svg
        width="73"
        height="72"
        viewBox="0 0 73 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_540_989)">
          <path d="M42.75 22.5H58.5V27H42.75V22.5Z" fill="#23A6F0" />
          <path d="M42.75 33.75H58.5V38.25H42.75V33.75Z" fill="#23A6F0" />
          <path d="M42.75 45H58.5V49.5H42.75V45Z" fill="#23A6F0" />
          <path d="M13.5 22.5H29.25V27H13.5V22.5Z" fill="#23A6F0" />
          <path d="M13.5 33.75H29.25V38.25H13.5V33.75Z" fill="#23A6F0" />
          <path d="M13.5 45H29.25V49.5H13.5V45Z" fill="#23A6F0" />
          <path
            d="M63 11.25H9C7.80689 11.2512 6.66299 11.7257 5.81934 12.5693C4.97568 13.413 4.50119 14.5569 4.5 15.75V56.25C4.50119 57.4431 4.97568 58.587 5.81934 59.4307C6.66299 60.2743 7.80689 60.7488 9 60.75H63C64.1931 60.7488 65.337 60.2743 66.1807 59.4307C67.0243 58.587 67.4988 57.4431 67.5 56.25V15.75C67.4988 14.5569 67.0243 13.413 66.1807 12.5693C65.337 11.7257 64.1931 11.2512 63 11.25ZM9 15.75H33.75V56.25H9V15.75ZM38.25 56.25V15.75H63V56.25H38.25Z"
            fill="#23A6F0"
          />
        </g>
        <defs>
          <clipPath id="clip0_540_989">
            <rect
              width="72"
              height="72"
              fill="white"
              transform="translate(0.5)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
    text: "Defalcate is most focused in helping you discover your most beautiful smile",
    heading: "Concrete",
  },
  {
    image: (
      <svg
        width="72"
        height="72"
        viewBox="0 0 72 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_540_1002)">
          <path
            d="M65.7599 19.86C65.4555 19.127 64.8729 18.5444 64.1399 18.24C63.7792 18.0863 63.3919 18.0047 62.9999 18H47.9999C47.2042 18 46.4412 18.3161 45.8786 18.8787C45.3159 19.4413 44.9999 20.2044 44.9999 21C44.9999 21.7956 45.3159 22.5587 45.8786 23.1213C46.4412 23.6839 47.2042 24 47.9999 24H55.7699L38.9999 40.77L29.1299 30.87C28.851 30.5888 28.5192 30.3656 28.1536 30.2133C27.788 30.061 27.3959 29.9826 26.9999 29.9826C26.6038 29.9826 26.2117 30.061 25.8461 30.2133C25.4806 30.3656 25.1488 30.5888 24.8699 30.87L6.86988 48.87C6.58869 49.1489 6.36551 49.4807 6.2132 49.8463C6.0609 50.2118 5.98248 50.604 5.98248 51C5.98248 51.396 6.0609 51.7882 6.2132 52.1537C6.36551 52.5193 6.58869 52.8511 6.86988 53.13C7.14877 53.4112 7.48057 53.6344 7.84615 53.7867C8.21173 53.939 8.60384 54.0174 8.99988 54.0174C9.39591 54.0174 9.78803 53.939 10.1536 53.7867C10.5192 53.6344 10.851 53.4112 11.1299 53.13L26.9999 37.23L36.8699 47.13C37.1488 47.4112 37.4806 47.6344 37.8461 47.7867C38.2117 47.939 38.6038 48.0174 38.9999 48.0174C39.3959 48.0174 39.788 47.939 40.1536 47.7867C40.5192 47.6344 40.851 47.4112 41.1299 47.13L59.9999 28.23V36C59.9999 36.7956 60.3159 37.5587 60.8786 38.1213C61.4412 38.6839 62.2042 39 62.9999 39C63.7955 39 64.5586 38.6839 65.1212 38.1213C65.6838 37.5587 65.9999 36.7956 65.9999 36V21C65.9951 20.608 65.9136 20.2207 65.7599 19.86Z"
            fill="#23A6F0"
          />
        </g>
        <defs>
          <clipPath id="clip0_540_1002">
            <rect width="72" height="72" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    text: "Overcame any hurdle or any other problem.",
    heading: "Hack Growth",
  },
];

export default function Home() {
  return (
    <Layout>
      <header className={`'2xl:flex' flex-col items-center `}>
        <div className=" py-5 sm:p-20 justify-center items-center gap-5 max-w-[100%] flex flex-col  sm:grid sm:grid-rows-2 sm:grid-cols-3 ">
          {headerData.map((el, index) => (
            <HeaderContainer
              key={index}
              className={el.style}
              image={el.image}
              text={el.text}
              subText={el.subText}
              heading={el.heading}
            />
          ))}
        </div>
      </header>

      <section className=" px-10 md:px-16  xl:px-20 ">
        <div className="flex flex-col text-center items-center">
          <h3 className="text-secondaryTextColor capitalize sm:text-xl">
            Featured Products
          </h3>
          <h1 className="text-textColor uppercase font-bold text-lg sm:text-2xl">
            BESTSELLER PRODUCTS
          </h1>
          <h4 className="text-secondaryTextColor text-sm">
            Problems trying to resolve the conflict between
          </h4>
        </div>

        <div className=" py-10 gap-10 xl:px-28 flex flex-col items-center sm:grid grid-cols-3 lg:grid-cols-5">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>

        <div className="flex justify-center">
          <button className="border rounded border-primary text-primary py-2.5 px-10 capitalize font-bold text-base">
            LOAD MORE PRODUCTS
          </button>
        </div>
      </section>

      <section className="py-20 px-10 md:px-10 lg:p-20">
        <div className="flex flex-col text-center items-center">
          <h3 className="text-secondaryTextColor capitalize sm:text-xl">
            Featured Products
          </h3>
          <h1 className="text-textColor uppercase font-bold text-lg sm:text-2xl">
            THE BEST SERVICES
          </h1>
          <h4 className="text-secondaryTextColor text-sm">
            Problems trying to resolve the conflict between
          </h4>
        </div>

        <div className="flex justify-between items-center sm:items-stretch flex-col sm:flex-row lg:justify-evenly py-20 md:px-10 lg:p-20">
          {featuredProduct.map((ele, index) => (
            <FeaturedCard
              svg={ele.image}
              header={ele.heading}
              text={ele.text}
              key={index}
            />
          ))}
        </div>
      </section>

      <section>
        <div className="flex flex-col items-center">
          <h3 className="text-primary capitalize text-base font-bold">
            Practice Advice
          </h3>
          <h1 className="text-textColor mt-4 uppercase font-bold text-2xl">
            Featured Posts
          </h1>
        </div>

        <div className="py-20 px-10 lg:p-20 flex-col items-center  flex md:flex-row justify-center 2xl:justify-evenly">
          {featuredPosts.map((ele, index) => (
            <PostsCard index={index} key={index} image={ele.image} />
          ))}
        </div>
      </section>

      <section className="py-20  lg:p-20">
        <div className="flex flex-col md:flex-row justify-evenly items-center">
          <div className="flex flex-col items-center mr-3">
            <h2 className="text-textColor text-center text-2xl font-bold">
              What they say about us
            </h2>
            <Image
              src={user}
              alt="user"
              className="w-[90px] mt-12 h-[90px] rounded-full"
            />
            <Rating className="mt-3 flex" rating={4} />
            <p className="text-secondaryTextColor mt-3   sm:w-[300px] lg:w-[451px] text-center font-bold text-sm">
              Slate helps you see how many more days you need to work to reach
              your financial goal.
            </p>
            <p className=" text-primary capitalize text-sm font-bold mt-4">
              regina miles
            </p>
            <p className="capitalize mt-1 font-bold text-sm text-textColor">
              designer
            </p>
          </div>
          <div className="gap-3 grid mt-10 md:mt-0 grid-cols-3">
            {reviewData.map((ele, index) => (
              <Image src={ele.image} key={index} alt="review image" />
            ))}
          </div>
        </div>
      </section>

      <section className=" px-10 lg:px-20 py-40  bg-hero-pattern bg-center ">
        <div className="flex flex-col  items-center">
          <p className="font-bold text-primary text-sm capitalize">
            Designing Better Experience
          </p>
          <h1 className="text-textColor text-2xl sm:text-4xl font-bold text-center sm:w-[571px]  mt-3">
            Problems trying to resolve the conflict between
          </h1>
          <h3 className="text-secondaryTextColor sm:w-[451px] mt-4 text-center text-sm">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics:
          </h3>
          <p className=" text-secondary font-bold text-2xl mt-4">$16.48</p>
          <div className="flex justify-center mt-4">
            <button className="border rounded bg-primary text-white py-2.5 px-10 capitalize font-bold text-sm sm:text-base">
              ADD YOUR CALL TO ACTION
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
