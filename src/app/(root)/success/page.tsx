import { YellowButton } from "@/components/reuseables/button_old/YellowButton";
import Link from "next/link";

const Success: React.FC = () => {
  return (
    <section className="bg-black w-full h-full flex items-center justify-center rounded-3xl">
      <div className="w-full sm:w-4/5 flex flex-col items-center gap-5 justify-center text-center">
        <h1 className="bold text-6xl sm:text-9xl md:text-[10rem] text-yellow-600 ">
          SUCCESS
        </h1>
        <p className="regular text-xl text-gray-300 leading-10">
          Thanks for your message, we’ll be in touch within 24 hours.
        </p>

        <Link href={"/contact"}>
          <div className="btn  relative ">
            <div className="contact-bg hover:bg-gray-800 thin flex items-center gap-2 text-lg xl:text-3xl px-12 py-3 xl:py-6 text-white rounded-full relative">
              <span>
                <YellowButton />
              </span>
              START AGAIN
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Success;
