import { StaticImageData } from "next/image";
import postOne from "@/assets/images/posts1.jpg";
import postTwo from "@/assets/images/posts2.jpg";
import postThree from "@/assets/images/posts3.jpg";

type FeaturedPosts = {
  image: string | StaticImageData;
};

export const featuredPosts: FeaturedPosts[] = [
  {
    image: postOne,
  },
  {
    image: postTwo,
  },
  {
    image: postThree,
  },
];
