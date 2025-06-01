import { commercialFormOne } from "@/constants";
import { YellowButton } from "../../button_old/YellowButton";
import { FormProps } from "@/types";

const CommercialFormOne = ({
  handleStepChange,
  handleOptionSelect,
}: FormProps) => {
  return (
    <div className="contact_form_step_wrapper">
      <h1 className="contact_form_step_wrapper_h1">
        {commercialFormOne[0].title}
      </h1>

      {/* OPTIONS */}
      <div className="contact_form_step_list_wrapper">
        {commercialFormOne.map((item, index) => (
          <button
            onClick={() => {
              handleStepChange("form12");
              handleOptionSelect(item.label, item.title);
            }}
            key={`${index}`}
            className="contact_form_step_list_button">
            <span className="contact_form_step_list_button_text">
              {item?.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CommercialFormOne;
