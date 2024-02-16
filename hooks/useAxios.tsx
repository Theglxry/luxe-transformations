import { FormData } from "@/types";
import axios from "axios";
import { useState } from "react";

const useAxios = (): [
  FormData,
  (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
  (e: React.FormEvent<HTMLFormElement>) => void
] => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    company: "",
    deadline: "",
    message: "",
  });

  //handle form input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
    
  };

  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Prepare data for submission
    const data = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      phone: formData.phone,
      email: formData.email,
      company: formData.company,
      deadline: formData.deadline,
      message: formData.message,
      
    };

    console.log("Form Data:", data); // Log the form data before submission

    // Send data to backend
    axios
      .post("https://luxe-transformations-be.vercel.app/api/v1/contact", data)
      .then((response) => {
        console.log("Submission successful");
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  };

  return [formData, handleInputChange, handleSubmit];
};

export default useAxios;
