import Link from "next/link";
import Image from "next/image";
import React from "react";

interface StickyButtonProps {
  href: string;
  text: string;
  arrowSrc: string;
  bgColor: string;
  textColor: string;
  borderStyle?: string;
}

const StickyButton: React.FC<StickyButtonProps> = ({
  href,
  text,
  arrowSrc,
  bgColor,
  textColor,
  borderStyle = "border-b-2 md:border-b-0",
}) => {
  return (
    <Link href={href} passHref>
      <div
        className={`sticky-btn-container tab-br w-full pt-10 py-10 md:w-1/4 flex-col-reverse md:order-first ${borderStyle}`}>
        <div className="sticky-btn flex justify-center md:justify-start">
          <div
            className="all-cases w-3/4 border items-center justify-center md:justify-start px-6 py-3 md:px-6 md:py-3 lg:px-10 rounded-full text-sm"
            style={{ backgroundColor: bgColor, color: textColor }}>
            <div className="flex items-center justify-center gap-5">
              <div className="wave text-base uppercase whitespace-nowrap">
                {text.split("").map((char, index) => (
                  <span key={`${index}`} style={{ "--i": index + 1 }}>
                    {char}
                  </span>
                ))}
              </div>
              <div className="all-cases-arrow flex items-center">
                <Image
                  src={arrowSrc}
                  alt=""
                  className="arrow-1"
                  width={20}
                  height={20}
                />
                <Image
                  src={arrowSrc}
                  alt="arrow-2"
                  className="arrow-2"
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default StickyButton;
