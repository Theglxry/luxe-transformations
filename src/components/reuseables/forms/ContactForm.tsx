// import useAxios from "@/app/(root)/contact/hooks/useAxios";
import useAxios from "@/hooks/useAxios";
import { useState } from "react";

const ContactForm: React.FC = ({
  handleSuccess = () => null,
  activeStep,
}: {
  handleSuccess?: any;
  activeStep?: any;
}) => {
  const [formData, handleInputChange, handleSubmit] = useAxios();
  console.log("activeStep", activeStep);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSuccess = () => {
    if (typeof handleSuccess === "function") handleSuccess();
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await handleSubmit(onSuccess);
    setIsSubmitting(false);
  };

  return (
    <>
      <div
        className={`pb-[50px] w-full  flex-col md:flex-row  mx-auto flex-1 flex items-center justify-start md:items-start md:justify-between gap-[32px] xl:gap-[60px] mt-[76px]`}>
        <h1 className="text-[clamp(40px,calc(60/1420*100vw),210px)] font-tt-tunnels text-white text-center">
          MAKE AN INQUIRY
        </h1>

        <form
          onSubmit={onSubmit}
          className="flex flex-col w-full  gap-[24px] md:w-[70%] xl:w-[clamp(40px,calc(662/1420*100vw),2000px)]">
          <div className="flex gap-[24px] flex-col sm:flex-row">
            <input
              className={"input"}
              placeholder="First Name"
              required
              value={formData.firstName}
              onChange={handleInputChange}
              name="firstName"
            />
            <input
              className={"input"}
              placeholder="Last Name"
              required
              value={formData.lastName}
              onChange={handleInputChange}
              name="lastName"
            />
          </div>
          <div className="flex gap-[24px] flex-col sm:flex-row">
            <input
              className={"input"}
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleInputChange}
              name="phone"
            />
            <input
              className={"input"}
              placeholder="Email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

          <div className="flex gap-[24px] flex-col sm:flex-row">
            <input
              className={"input"}
              required
              name="company"
              placeholder="Company*"
              value={formData.company}
              onChange={handleInputChange}
            />

            <input
              type="text"
              name="deadline"
              placeholder="Dealine in weeks*"
              required
              value={formData.deadline}
              className={"input"}
              onChange={handleInputChange}
            />
          </div>

          <textarea
            placeholder="Your Message Here"
            className={"textarea"}
            rows={5}
            name="message"
            value={formData.message}
            onChange={handleInputChange}
          />
          <div className="flex">
            <button
              className={"input_button"}
              type="submit"
              disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;

// <section className=" hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-5">
//         <div className="content w-full flex flex-col xl:flex-row gap-5 xl:gap-24">
//           <div>
//             <h1 className="bold text-5xl  text-center md:text-left xl:text-7xl">
//               READY TO CREATE MAGIC?
//             </h1>
//           </div>

//           <div className="thin text-xl w-full ">
//             <form onSubmit={onSubmit} className="space-y-5 ">
//               <div className="flex gap-2 sm:gap-5 max-tablet:flex-col">
//                 <input
//                   type="text"
//                   name="firstName"
//                   placeholder="First Name *"
//                   className="contact-bg w-full p-2 sm:p-4 tracking-widest rounded-md focus:outline-none"
//                   required
//                   value={formData.firstName}
//                   onChange={handleInputChange}
//                 />

//                 <input
//                   type="text"
//                   name="lastName"
//                   placeholder="Last Name *"
//                   className="contact-bg w-full p-2 sm:p-4 tracking-widest rounded-md focus:outline-none"
//                   required
//                   value={formData.lastName}
//                   onChange={handleInputChange}
//                 />
//               </div>

//               <div className="flex gap-2 sm:gap-5 max-tablet:flex-col">
//                 <input
//                   type="text"
//                   name="phone"
//                   placeholder="Phone [optional] "
//                   className="contact-bg w-full p-2 sm:p-4  tracking-widest rounded-md focus:outline-none"
//                   value={formData.phone}
//                   onChange={handleInputChange}
//                 />
//                 <input
//                   type="text"
//                   name="email"
//                   placeholder="Email*"
//                   className="contact-bg w-full p-2 sm:p-4 tracking-widest rounded-md focus:outline-none"
//                   required
//                   value={formData.email}
//                   onChange={handleInputChange}
//                 />
//               </div>

//               <div className="flex gap-2 sm:gap-5 max-tablet:flex-col">
//                 <input
//                   type="text"
//                   name="company"
//                   placeholder="Company*"
//                   className="contact-bg w-full p-2 sm:p-4 tracking-widest rounded-md focus:outline-none"
//                   required
//                   value={formData.company}
//                   onChange={handleInputChange}
//                 />
//                 <input
//                   type="text"
//                   name="deadline"
//                   placeholder="Dealine in weeks*"
//                   className="contact-bg w-full p-2 sm:p-4 tracking-widest rounded-md focus:outline-none"
//                   required
//                   value={formData.deadline}
//                   onChange={handleInputChange}
//                 />
//               </div>

//               <div className="flex flex-col md:flex-row gap-2 sm:gap-5 items-center justify-center">
//                 <textarea
//                   name="message"
//                   placeholder="Your message here...."
//                   className="contact-bg w-full md:min-h-[200px] tracking-[0.3rem] rounded-md px-6 py-3 text-md focus:outline-none"
//                   value={formData.message}
//                   onChange={handleInputChange}></textarea>
//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="regular bg-yellow-600 tracking-widest rounded-full w-[100px] h-[100px] md:w-[270px] md:h-[200px] flex items-center justify-center">
//                   {isSubmitting ? "Submitting..." : "Submit"}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </section>
