import Link from "next/link";
import React from "react";

const ContactUs = () => {
  return (

    // change font
    <div className="w-full flex flex-col gap-5 md:gap-10 text-center mb-28 py-10 lg:py-16">
      <h4 className="text-2xl md:text-4xl">Contact Us Today!</h4>

      <h1 className="text-5xl md:text-6xl font-semibold">Let's make an action plan</h1>

      <div className="">
        <Link href={'/contact'}>
        <button className="font-semibold px-10 py-3 md:px-16 md:py-5 rounded-full border-[0.9px] border-yellow-400">Make An Inquiry</button>
        </Link>
      </div>
    </div>
  );
};

export default ContactUs;
