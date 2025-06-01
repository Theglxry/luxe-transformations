import { YellowButton } from "../button_old/YellowButton";

export interface HelpSelectItem {
  id: number;
  label: string;
  key?: string;
}

interface FormOneProps {
  helpSelect: HelpSelectItem[];
  handleStepChange: (step: string) => void;
  clickMain?: any;
}

const FormOne = ({ helpSelect, handleStepChange, clickMain }: FormOneProps) => {
  return (
    <>
      <div className="contact_form_step_wrapper">
        <h1 className="contact_form_step_wrapper_h1">HOW CAN WE HELP?</h1>

        <div className="contact_form_step_list_wrapper">
          {helpSelect.map((item, index) => {
            return (
              <button
                key={`${index}`}
                onClick={() => {
                  handleStepChange("formTwo");
                  clickMain(item?.key);
                }}
                className="contact_form_step_list_button">
                <span className="contact_form_step_list_button_text">
                  {item?.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FormOne;
