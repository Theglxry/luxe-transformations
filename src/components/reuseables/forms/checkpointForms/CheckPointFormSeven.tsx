import { checkPointSeven } from "@/constants";
import { FormProps } from "@/types";
import { YellowButton } from "../../button_old/YellowButton";

const CheckPointFormSeven = ({
  handleStepChange,
  handleOptionSelect,
}: FormProps) => {
  return (
    <div className="contact_form_step_wrapper">
      <h1 className="contact_form_step_wrapper_h1">
        WHERE DID YOU HEAR ABOUT LUXE TRANSFORMATIONS ?
      </h1>

      {/* OPTIONS */}
      <div className="contact_form_step_list_wrapper">
        {checkPointSeven.map((item, index) => (
          <button
            key={`${index}`}
            className="contact_form_step_list_button"
            // type="button"
            onClick={() => {
              handleStepChange("lastForm");
              handleOptionSelect(item.label, item.title || "");
            }}>
            <span className="contact_form_step_list_button_text">
              {item?.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CheckPointFormSeven;
