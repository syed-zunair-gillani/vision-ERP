import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoArrowForward } from "react-icons/io5";

const Request = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <Link href="/">
          <Image
            src="/image/logo.png"
            alt="Rehab Fit"
            width={100}
            height={100}
            className=""
          />
        </Link>
        <h2 className="text-[#122029] text-3xl font-semibold my-3 ">
          Request a Demo
        </h2>
        <p className="text-center max-w-[580px]">
          To see how an ERP could help your business, or discuss how you can
          improve your current system, send us a message.
        </p>
      </div>
      <form className="mt-5 mb-5 md:px-5">
        <input
          type="text"
          name=""
          id=""
          placeholder="Full Name"
          className="w-full bg-[#F8FAFB] focus:outline-none border-[1px] border-[#DAE9F1] p-4 rounded-lg"
        />
        <input
          type="email"
          name=""
          id=""
          placeholder="E-mail address"
          className="w-full bg-[#F8FAFB] mt-4 focus:outline-none border-[1px] border-[#DAE9F1] p-4 rounded-lg"
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="Subject"
          className="w-full bg-[#F8FAFB] mt-4 focus:outline-none border-[1px] border-[#DAE9F1] p-4 rounded-lg"
        />
        <textarea
          placeholder="Type your message here"
          className="w-full h-[180px] bg-[#F8FAFB] mt-4 focus:outline-none border-[1px] border-[#DAE9F1] p-4 rounded-lg"
        />
        <button
          className={`g1 w-full justify-center mt-3 px-6 md:py-4 py-6 button inline-flex rounded-[10px] text-white font-semibold items-center gap-2 hover:scale-105`}
        >
          Submit Now <IoArrowForward className="text-lg" />
        </button>
      </form>
    </div>
  );
};

export default Request;
