import React from 'react';
import { Playfair_Display, Open_Sans, Mulish } from "next/font/google";
import Image from 'next/image';
import test1 from "../assets/test1.jpg";
import test2 from "../assets/test2.jpg";
import test3 from "../assets/test3.jpg";
import test4 from "../assets/test4.jpg";

const playFair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const testimonials = [
  {
    name: "John Doe",
    desc: "“Seamless experience from start to finish. CVT helped streamline our admin and bookkeeping — we finally have time to focus on growth.”",
    src: test1,
  },
  {
    name: "John Doe",
    desc: "“Their virtual assistants feel like an extension of our in-house team. Communication is smooth and quality is top-tier.”",
    src: test2,
  },
  {
    name: "John Doe",
    desc: "“Seamless experience from start to finish. CVT helped streamline our admin and bookkeeping — we finally have time to focus on growth.”",
    src: test3,
  },
  {
    name: "John Doe",
    desc: "“Their virtual assistants feel like an extension of our in-house team. Communication is smooth and quality is top-tier.”",
    src: test4,
  },
];

const Testimonial = () => {
  return (
    <div className="w-full mt-20 lg:mt-30 px-5">
      <h1
        className={`${playFair.className} text-5xl text-center`}
        style={{
          background: "linear-gradient(to right, #FFDCBB, #54330C)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Testimonial
      </h1>
      <p
        className={`${openSans.className} text-lg font-light text-[#2E2B28CC] text-center mt-2`}
      >
        See What People Say About Us
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto mt-10">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="border border-[#D6C5A066] rounded-xl p-8 flex flex-col items-center text-center"
          >
            <Image
              src={item.src}
              alt={`testimonial ${index}`}
              width={100}
              height={100}
              className="rounded-full w-24 h-24 object-cover mb-5"
            />
            <h1 className={`${playFair.className} text-xl font-medium mb-3`}>
              {item.name}
            </h1>
            <p className={`${mulish.className} text-[#00000080] text-base leading-relaxed`}>
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
