import { StaticImageData } from "next/image";
import imageOne from "@/assets/images/media1.jpg";
import imageTwo from "@/assets/images/media2.jpg";
import imageThree from "@/assets/images/media3.jpg";
import imageFour from "@/assets/images/media4.jpg";

export interface HeaderFilter {
  image: string | StaticImageData;
  heading: string;
  text: string;
  subText: string;
  style: string;
}

export const headerData: HeaderFilter[] = [
  {
    image: imageOne,
    heading: "furniture",
    text: "5 Items",
    subText: "read more",
    style:
      "sm:col-span-1 w-[80%] h-[300px] sm:w-full sm:h-full  relative sm:col-start-1 sm:row-span-3 ",
  },
  {
    image: imageTwo,
    heading: "furniture",
    text: "5 Items",
    subText: "read more",
    style:
      "sm:col-span-2 w-[80%] h-[300px] relative sm:w-auto sm:h-auto  sm:row-span-2",
  },
  {
    image: imageThree,
    heading: "furniture",
    text: "5 Items",
    subText: "read more",
    style:
      "sm:col-span-1 w-[80%] h-[300px] sm:w-auto sm:h-auto sm:col-start-2 relative sm:row-start-3 sm:row-span-1 ",
  },
  {
    image: imageFour,
    heading: "furniture",
    text: "5 Items",
    subText: "read more",
    style:
      "sm:col-span-1 w-[80%] h-[300px] sm:w-auto sm:h-auto sm:col-start-3 relative sm:row-span-1",
  },
];
