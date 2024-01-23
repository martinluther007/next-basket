import { StaticImageData } from "next/image";

import image1 from "@/assets/images/rev1.jpg";
import image2 from "@/assets/images/rev2.jpg";
import image3 from "@/assets/images/rev3.jpg";
import image4 from "@/assets/images/rev4.jpg";
import image5 from "@/assets/images/rev5.jpg";
import image6 from "@/assets/images/rev6.jpg";
import image7 from "@/assets/images/rev7.jpg";
import image8 from "@/assets/images/rev8.jpg";
import image9 from "@/assets/images/rev9.jpg";
type ReviewImage = {
  image: string | StaticImageData;
};

export const reviewData: ReviewImage[] = [
  {
    image: image1,
  },
  {
    image: image2,
  },
  {
    image: image3,
  },
  {
    image: image4,
  },
  {
    image: image5,
  },
  {
    image: image6,
  },
  {
    image: image7,
  },
  {
    image: image8,
  },
  {
    image: image9,
  },
];
