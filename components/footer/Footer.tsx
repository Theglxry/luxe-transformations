import { socialLinks, tabs } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full h-full flex flex-col gap-10 md:gap-28 pb-10 xl:px-10">
      <div className="w-full  h-full flex flex-col lg:flex-row gap-10  justify-between">
        {/* div 1 */}
        {/* logo links */}
        <div className="flex flex-col gap-10 lg:w-1/2">
          <Link href={"/"}>
            <div className="">
              <Image
                src="/icons/logo.svg"
                alt="logo"
                width={300}
                height={100}
              />
            </div>
          </Link>

          {/* social links */}
          <div>
          <h4 className="text-2xl ">Find Us On Social Media </h4>
          <div className="social-links flex gap-2 mt-5">
          {socialLinks.map((socail,idx) => (
            <Link href={socail.url}  key={idx}>
            <Image src={socail.img} alt={socail.label} />
            </Link>
          ))}
          </div>
          </div>
        

        </div>

        {/* div 2 */}
        <div className="w-full flex flex-col md:flex-row gap-10  md:justify-between">
          <div className="flex flex-col gap-5">
            {/* quick links */}
            <div className="flex flex-col gap-5">
              <h4 className="text-2xl">Quick Links</h4>

              <Link href="#" className="font-thin text-gray-300">
                Home
              </Link>
              <Link href="#" className="font-thin text-gray-300">
                About Us
              </Link>
              <Link href="#" className="font-thin text-gray-300">
                Contact US
              </Link>
            </div>

            {/*dekstop our info */}
            <div className="hidden  md:flex flex-col gap-5">
              <h4 className="text-xl md:text-2xl">Our info</h4>
              <Link
                href="#"
                className="flex items-center gap-2 font-thin text-gray-300"
              >
                <Image
                  src="/icons/call-calling.svg"
                  alt=""
                  width={20}
                  height={20}
                />{" "}
                <span className="whitespace-nowrap">0121 222 9229</span>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 font-thin text-gray-300"
              >
                <Image src="/icons/Vector.svg" alt="" width={20} height={20} />{" "}
                <span className="whitespace-nowrap">+447333253447</span>
              </Link>
            </div>
          </div>

          {/* commercial links */}
          <div className="">
            <h4 className="text-2xl whitespace-nowrap">Commercial Renovation</h4>

            <div>
              {tabs
                .filter((tab) => tab.title === "Commercial")
                .map((links) => (
                  <ul
                    key={links.id}
                    className="flex flex-col gap-5 pt-5 font-thin"
                  >
                    {links.items.map((item) => (
                      <li key={item.id}>{item.label}</li>
                    ))}
                  </ul>
                ))}
            </div>
          </div>

          {/* residential links */}
          <div>
            <h4 className="text-2xl whitespace-nowrap">Residential Renovation</h4>
            <div>
              {tabs
                .filter((tab) => tab.title === "Residential")
                .map((links) => (
                  <ul
                    key={links.id}
                    className="flex flex-col gap-5 pt-5 font-thin"
                  >
                    {links.items.map((item) => (
                      <li key={item.id}>{item.label}</li>
                    ))}
                  </ul>
                ))}
            </div>
          </div>

          {/*mobile  our info */}
          <div className="flex flex-col gap-5 md:hidden">
            <h4 className="text-2xl">Our info</h4>
            <Link
                href="#"
                className="flex items-center gap-2 font-thin text-gray-300"
              >
                <Image
                  src="/icons/call-calling.svg"
                  alt=""
                  width={20}
                  height={20}
                />{" "}
                <span className="whitespace-nowrap">0121 222 9229</span>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 font-thin text-gray-300"
              >
                <Image src="/icons/Vector.svg" alt="" width={20} height={20} />{" "}
                <span>+447333253447</span>
              </Link>
          </div>
        </div>
      </div>





      {/* div 3 */}
      {/* copyright */}
      <div className="w-full text-center text-sm md:text-base text-gray-300 ">
        Copyright © 2024 John Clive Industries Ltd. Registered in England and
        Wales, UK. All rights reserved. <br /> Website Developed by  <Link href={'https://lintechgroup.co.uk/contact-form'} className="cursor-pointer">Lintech Group</Link>
      </div>
    </div>
  );
};

export default Footer;
