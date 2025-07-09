import React from "react";
import { Playfair_Display,Open_Sans } from "next/font/google";
import Image from "next/image";
// import StarIcon from "../assets/star.png";
import gem21 from "../assets/gem21.jpg";
import gem22 from "../assets/gem22.jpg";


const playFair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const openSans = Open_Sans({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
})

const Gems = [
  {
    src: gem21,
    alt: "GEM 4",
    name: "Art Deco Brilliance in Emerald"
  },
  {
    src: gem22,
    alt: "GEM 5",
    name: "Emeralds Surrounded by Sparkling"
  },
];

const ShowGems = () => {
  return (
    <div className="max-w-4xl mx-auto mt-25 w-full">
      {/* <Image src={StarIcon} alt="star" width={20} height={20} className="absolute top-395 left-30" />
        <Image src={StarIcon} alt="star" width={20} height={20} className="absolute top-400 right-30" /> */}
      {/* <Image src={StarIcon} alt="star" width={25} height={25} className="absolute top-510 right-155" /> */}
      <div className="flex flex-col md:flex-row items-center justify-center">
        {Gems.map((gem, index) => (
          <div key={index} className="w-1/2 mb-10 px-5">
            <Image
              src={gem.src}
              alt={gem.alt}
              width={300}
              height={300}
              className="w-full object-cover"
            />
            <div className="flex justify-center mt-5">
  <button className="border font-light rounded-md cursor-pointer hover:bg-[#2E2B28] hover:text-[#FFFFFF] duration-300 px-6 py-2">
    Explore More
  </button>
</div>
<p className={`text-center mt-5 text-md ${openSans.className}`}>{gem.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowGems;
