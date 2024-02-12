import React from "react";

const ContactForm: React.FC = () => {
  return (

    <section className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-5 md:px-36">
      <div className="content w-full flex flex-col xl:flex-row gap-5 xl:gap-24">
        <div>
          <h1 className="bold text-4xl  text-center md:text-left xl:text-7xl">
            READY TO CREATE MAGIC?
          </h1>
        </div>

        <div className="thin text-xl w-full ">
          <form action="" className="space-y-5">
            <div className="flex gap-2 sm:gap-5 max-tablet:flex-col">
              <input
                type="text"
                placeholder="First Name *"
                className="contact-bg w-full p-2 sm:p-4 rounded-md focus:outline-none"
                required
              />
              <input
                type="text"
                placeholder="Last Name *"
                className="contact-bg w-full p-2 sm:p-4 rounded-md focus:outline-none"
                required
              />
            </div>

            <div className="flex gap-2 sm:gap-5 max-tablet:flex-col">
              <input
                type="text"
                placeholder="Phone [optional] "
                className="contact-bg w-full p-2 sm:p-4 rounded-md focus:outline-none"
                required
              />
              <input
                type="text"
                placeholder="Email*"
                className="contact-bg w-full p-2 sm:p-4 rounded-md focus:outline-none"
                required
              />
            </div>

            <div className="flex gap-2 sm:gap-5 max-tablet:flex-col">
              <input
                type="text"
                placeholder="Company*"
                className="contact-bg w-full p-2 sm:p-4 rounded-md focus:outline-none"
                required
              />
              <input
                type="text"
                placeholder="Dealine in weeks*"
                className="contact-bg w-full p-2 sm:p-4 rounded-md focus:outline-none"
                required
              />
            </div>

            <div className="flex flex-col md:flex-row gap-2 sm:gap-5 items-center justify-center">
              <textarea
                placeholder="Your message here...."
                className="contact-bg w-full md:min-h-[200px] rounded-md px-6 py-3 text-base focus:outline-none"
              ></textarea>

              <button
                type="submit"
                className="regular bg-yellow-600 rounded-full w-[100px] h-[100px] md:w-[270px] md:h-[200px] flex items-center justify-center"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
