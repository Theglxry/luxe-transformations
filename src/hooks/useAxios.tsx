import { FormData } from "@/types";
import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/libs/state/store";

const useAxios = (): [
  FormData,
  (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
  () => Promise<void>, // Change return type to a function that handles form submission
] => {
  const questionsAndAnswers = useSelector(
    (state: RootState) => state.formReducer.questionsAndAnswers
  );

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    company: "",
    deadline: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (cb = () => null) => {
    const data = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      phone: formData.phone,
      email: formData.email,
      company: formData.company,
      deadline: formData.deadline,
      message: formData.message,
      question: questionsAndAnswers,
    };

    console.log("outside", data);

    try {
      const response = await axios.post(
        "https://luxe-transformations-be.vercel.app/api/v1/contact",
        data
      );
      console.log("Submission successful");
      // Navigate to success page
      if (typeof cb === "function") cb();

      // Clear form fields
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        company: "",
        deadline: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return [formData, handleInputChange, handleSubmit];
};

export default useAxios;
