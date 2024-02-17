  import { commercialFormOne} from "@/constants";
import { YellowButton } from "../../button/YellowButton";
import { FormProps } from "@/types";
 

const CommercialFormOne = ({
  handleStepChange,
  handleOptionSelect,
}: FormProps) => {







  
  return (
    <div className="flex flex-col gap-10 text-center" data-aos="fade-left">
      <h1 className="bold text-2xl sm:text-4xl xl:text-7xl">
      {commercialFormOne[0].title}
      </h1>
      {/* OPTIONS */}
      <div className="flex sm:flex-wrap flex-col sm:flex-row   sm:gap-10 justify-center items-center">
        {commercialFormOne.map((item, index) => (
          <div key={index} className="btn mb-4 relative">
            <div
              className="contact-bg hover:bg-gray-800 thin flex  items-center gap-2 text-lg xl:text-3xl px-12 py-3 xl:py-6 text-white rounded-full relative"
              onClick={() => {
                handleStepChange("form12");
                handleOptionSelect(item.label , item.title);
              }}
            >
              <span>
                <YellowButton />
              </span>

              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommercialFormOne;