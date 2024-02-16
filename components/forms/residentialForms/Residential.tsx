import { residentialForm } from "@/constants";
import { YellowButton } from "../../button/YellowButton";
import { FormProps } from "@/types";
 
 

const FormFour = ({
  handleStepChange,
  handleOptionSelect,
}: FormProps) => {


  const getNextForm = (index: number) => {
    switch (index) {
      case 0:
        return "formFive";
      case 1:
        return "formFive";
        case 2:
          return "checkPointFormOne";
          case 3:
            return "checkPointFormOne";
      default:
        return "";
    }
  };

  return (
    <div
    className="flex flex-col gap-10 text-center"
    data-aos="fade-left"
  >
    <h1 className="bold text-3xl xl:text-7xl">
     {residentialForm[0].title}
    </h1>
    <div className="flex sm:flex-wrap flex-col sm:flex-row   sm:gap-10 justify-center items-center">
      {residentialForm.map((item, index) => (
        <div key={index} className="mb-4 relative">
          <div
            className="contact-bg thin flex  items-center gap-2 text-lg xl:text-3xl   px-12 py-3 xl:py-6 text-white rounded-full relative"
            onClick={() => {
              const nextForm = getNextForm(index);
                handleStepChange(nextForm);
              handleOptionSelect(item.label);
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

export default FormFour;
