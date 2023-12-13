import Image from "next/image";
import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io5";

const AboutMe = () => {
  return (
    <section className="px-4">
      <div className="container mx-auto my-10 border rounded-[20px] p-4 flex gap-6">
        <figure className="hidden md:block">
          <Image
            src="/image/blog-img.png"
            alt="img"
            width={100}
            height={100}
            className="rounded-full w-[60px] h-[60px] object-cover"
          />
        </figure>
        <div className="flex-1">
          <div className="flex gap-5">
            <figure className="block md:hidden">
              <Image
                src="/image/blog-img.png"
                alt="img"
                width={100}
                height={100}
                className="rounded-full w-[70px] h-[70px] object-cover"
              />
            </figure>
            <div className="flex flex-col md:flex-row gap-3 justify-between md:py-3 pb-8 md:pb-5 border-b flex-1">
              <h4 className="font-bold text-black/80 text-2xl">Jilon Miah</h4>
              <ul className="flex gap-2">
                <li className="bg-black/80  md:text-xl p-2 rounded-full text-white">
                  <FaFacebookF />
                </li>
                <li className="bg-black/80  md:text-xl p-2 rounded-full text-white">
                  <IoLogoTwitter />
                </li>
                <li className="bg-black/80  md:text-xl p-2 rounded-full text-white">
                  <IoLogoInstagram />
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white  text-black/80 font-semibold table-caption whitespace-nowrap -mt-3">
            About Me
          </div>
          <p className="text-[#3F4548] text-lg mt-4">
            Unit4 solutions have made a real impact in the public sector,
            helping two police forces save £4 million annually through
            collaborative finance and HR strategy. The departments were
            struggling with multiple fragmented and overlapping systems, ranging
            from duty management, HR and payroll, to performance recording,
            training, and asset management. With data locked in silos, the
            disjointed data delayed decision-making and inhibited change.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
