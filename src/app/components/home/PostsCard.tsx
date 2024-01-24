import Link from "next/link";
import Image, { StaticImageData } from "next/image";

const PostsCard = ({
  image,
  index,
}: {
  image: string | StaticImageData;
  index: number;
}) => {
  return (
    <div
      className={`w-[80%] sm:w-[348px] mt-5 md:mt-0 md:w-[240px] lg:w-[348px] shadow ${
        index % 2 && "mx-6"
      }`}
    >
      <div className="w-full relative ">
        <Image src={image} alt="post 1" className=" w-full" />
        <p className="absolute bg-dangerColor capitalize rounded py-1 px-2.5 text-sm font-bold text-white top-5 left-5">
          new
        </p>
      </div>
      <div className="p-4 ">
        <div className="text-xs">
          <Link href="/" className="text-disabled capitalize">
            google
          </Link>
          <Link href="/" className="text-secondaryTextColor mx-3 capitalize">
            trending
          </Link>
          <Link href="/" className="text-secondaryTextColor capitalize">
            new
          </Link>
        </div>
        <p className="text-textColor text-xl mt-2">
          Loudest à la Madison #1 (Lintegral)
        </p>
        <p className="text-secondaryTextColor text-sm w-[100%] lg:w-[280px] mt-2">
          We focus on ergonomics and meeting you where you work. Its only a
          keystroke away.
        </p>

        <div className="flex flex-col lg:flex-row lg:items-center mt-2 justify-between">
          <div className="flex items-center lg:justify-between">
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.49933 14.6667C5.20378 14.6232 2.54277 11.9622 2.49933 8.66668C2.54277 5.37113 5.20378 2.71011 8.49933 2.66668C11.7949 2.71011 14.4559 5.37113 14.4993 8.66668C14.4559 11.9622 11.7949 14.6232 8.49933 14.6667ZM8.49933 4.00001C5.93611 4.03376 3.86641 6.10346 3.83266 8.66668C3.86641 11.2299 5.93611 13.2996 8.49933 13.3333C11.0625 13.2996 13.1322 11.2299 13.166 8.66668C13.1322 6.10346 11.0625 4.03376 8.49933 4.00001ZM11.8327 9.33334H7.83266V5.33334H9.16599V8.00001H11.8327V9.33334ZM14.0273 4.47201L12.0213 2.47201L12.9607 1.52734L14.9673 3.52734L14.0273 4.47134V4.47201ZM2.97066 4.47201L2.02733 3.52734L4.02133 1.52734L4.96466 2.47201L2.972 4.47201H2.97066Z"
                fill="#23A6F0"
              />
            </svg>
            <p className="text-secondaryTextColor text-xs ml-1.5">
              22 April 2021
            </p>
          </div>
          <div className="flex items-center mt-3 lg:mt-0 lg:justify-between">
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.3333 13.8334H2V0.833415C2 0.741748 1.925 0.666748 1.83333 0.666748H0.666667C0.575 0.666748 0.5 0.741748 0.5 0.833415V15.1667C0.5 15.2584 0.575 15.3334 0.666667 15.3334H16.3333C16.425 15.3334 16.5 15.2584 16.5 15.1667V14.0001C16.5 13.9084 16.425 13.8334 16.3333 13.8334ZM3.5 12.5001H14.6667C14.7583 12.5001 14.8333 12.4251 14.8333 12.3334V3.25008C14.8333 3.10008 14.6521 3.02716 14.5479 3.13133L10.1667 7.51258L7.55417 4.92925C7.52284 4.89823 7.48054 4.88083 7.43646 4.88083C7.39238 4.88083 7.35007 4.89823 7.31875 4.92925L3.38125 8.87925C3.36596 8.89457 3.35385 8.91277 3.34562 8.93279C3.3374 8.95281 3.33322 8.97427 3.33333 8.99591V12.3334C3.33333 12.4251 3.40833 12.5001 3.5 12.5001Z"
                fill="#23856D"
              />
            </svg>
            <p className="text-secondaryTextColor text-xs ml-1.5">
              10 comments
            </p>
          </div>
        </div>

        <Link
          href="/"
          className="text-secondaryTextColor text-sm font-bold capitalize flex items-center mt-4  "
        >
          learn more
          <svg
            className="ml-2"
            width="9"
            height="16"
            viewBox="0 0 9 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.180771 0.180771C0.237928 0.123469 0.305828 0.0780066 0.380583 0.0469869C0.455337 0.0159672 0.535477 0 0.616412 0C0.697347 0 0.777487 0.0159672 0.852241 0.0469869C0.926996 0.0780066 0.994896 0.123469 1.05205 0.180771L8.4358 7.56452C8.4931 7.62168 8.53857 7.68958 8.56959 7.76433C8.60061 7.83909 8.61657 7.91923 8.61657 8.00016C8.61657 8.0811 8.60061 8.16124 8.56959 8.23599C8.53857 8.31074 8.4931 8.37865 8.4358 8.4358L1.05205 15.8196C0.936514 15.9351 0.779809 16 0.616412 16C0.453015 16 0.29631 15.9351 0.180771 15.8196C0.0652316 15.704 0.000322157 15.5473 0.000322157 15.3839C0.000322157 15.2205 0.0652316 15.0638 0.180771 14.9483L7.13011 8.00016L0.180771 1.05205C0.123469 0.994897 0.078006 0.926996 0.0469863 0.852242C0.0159666 0.777487 0 0.697347 0 0.616412C0 0.535478 0.0159666 0.455338 0.0469863 0.380583C0.078006 0.305829 0.123469 0.237928 0.180771 0.180771Z"
              fill="#23A6F0"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default PostsCard;
