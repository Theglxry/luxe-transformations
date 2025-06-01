import { commercialFormOne } from "@/constants";
import { useState, ChangeEvent, FormEvent } from "react";
import { FormProps } from "@/types";
import Image from "next/image";
import { motion } from "framer-motion";

const CommercialFormFour = ({
  handleStepChange,
  handleOptionSelect,
}: FormProps) => {
  const [textareaValue, setTextareaValue] = useState<string>("");

  const handleTextareaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaValue(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (textareaValue.trim() === "") {
      alert("Please fill in the textarea.");
      return;
    }
    const title = commercialFormOne[3].title;
    handleStepChange("form13");
    handleOptionSelect(textareaValue, title);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="contact_form_step_wrapper">
        <h1 className="contact_form_step_wrapper_h1">
          {commercialFormOne[3].title}
        </h1>

        {/* OPTIONS */}
        <div className="flex flex-col items-center gap-[20px] w-full">
          <textarea
            placeholder="Fill in a number...."
            className="textarea"
            value={textareaValue}
            style={{
              width: "100%",
            }}
            onChange={handleTextareaChange}
            required></textarea>
          {/* 
          <button
            type="submit"
            className="border p-3 rounded-full"
            data-state="1">
            <div className=" transform -rotate-100">
              <i className="icon"></i>
              <span>
                <Image
                  src="/icons/arrow-hex-1.svg"
                  alt="Arrow icon with hexagon tip"
                  className="w-6 h-3  sm:w-[20px] sm:h-[20px]"
                  width={30}
                  height={30}
                />
              </span>
            </div>
          </button> */}

          <motion.button
            type="submit"
            animate={{ scale: 1.2, rotate: 180 }}
            // onClick={clickBackBtn}
          >
            <img
              src="/icons/back_outlined_white.svg"
              className="w-[clamp(30px,calc(50/1420*100vw),70px)]"
            />
          </motion.button>
        </div>
      </div>
    </form>
  );
};

export default CommercialFormFour;
