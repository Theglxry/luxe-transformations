import { brandPerks, customerReviews } from "@/constants";
import Image from "next/image";
import { useState } from "react";
import Allcases from "./Allcases";
import ReviwsSlide from "./ReviewsSlide";

const Reviews = () => {
  return (
    <section className="tab-br w-full flex flex-col gap-10 mb-10 md:pb-28 xl:px-16 border-b-2">
      <div className="w-full flex flex-col gap-10">
        <div>
          <h1 className="text-2xl md:text-5xl font-semibold">
            Hear What <br /> Others Are Saying
          </h1>
        </div>

        <ReviwsSlide />
      </div>

      <section>
        <Allcases />
      </section>
    </section>
  );
};

export default Reviews;
