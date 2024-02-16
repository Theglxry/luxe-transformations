import { YellowButton } from "../button/YellowButton";

export interface HelpSelectItem {
  id: number;
  label: string;
}

interface FormOneProps {
  helpSelect: HelpSelectItem[];
  handleStepChange: (step: string) => void;
}



const FormOne = ({ 
  helpSelect,
   handleStepChange
   }: FormOneProps) => {
  return (
    <div className="flex flex-col gap-10 text-center">
      <h1 className="bold text-4xl xl:text-7xl" data-aos="fade-up-right">
        HOW CAN WE HELP?{" "}
      </h1>
      <div className="flex sm:flex-wrap flex-col sm:flex-row sm:gap-10 justify-center items-center">
        {helpSelect.map((item, index) => (
          <div key={index} className="mb-4 relative">
            <div
              className="contact-bg light hover:px14 cursor-pointer flex items-center gap-2 text-lg xl:text-3xl px-12 py-3 xl:py-6 text-white rounded-full relative"
              onClick={() => {
                handleStepChange("formTwo");
              }}
            >
              {index === 0 && (
                <span>
                  <YellowButton />  
                </span>
              )}
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormOne;
