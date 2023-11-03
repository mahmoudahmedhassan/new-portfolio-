/* eslint-disable react/prop-types */

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const InputField = (props) => {
  return (
    <label className="flex flex-col">
      <span className="text-white font-medium mb-4">{props.label}</span>
      <input
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
      />
    </label>
  );
};
function ContactForm() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // setLoading(true);
    if (validateForm()) {
      emailjs
        .send(
          "service_g3em5z99",
          "template_gh9to6o",
          {
            from_name: form.name,
            to_name: "Mahmoud Ahmed",
            from_email: form.email,
            to_email: "hekou77@gmail.com",
            message: form.message,
          },
          "5hPGMa_4GKMB7qovu"
        )
        .then(
          () => {
            // setLoading(false);
 
            setForm({
              name: "",
              email: "",
              message: "",
            });
            toast.success('Email sent successfully!', {
              position: 'bottom-right',
              autoClose: 3000, // Close the toast after 3 seconds
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          },
   
          (error) => {
            setLoading(false);
            console.error(error);

             toast.error('Please fill in all required fields correctly and try again!', {
              position: 'botton-right',
              autoClose: 3000, // Close the toast after 3 seconds
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
        );
    }
  };
  // Form validation function
  const validateForm = () => {
    // Implement your validation rules here
    let valid = true;
    const newErrors = {};

    // Validate the name field
    if (!form.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }
    // Validate the message field
    if (!form.message.trim()) {
      newErrors.message = "message is required";
      valid = false;
    }

    // Validate the email field
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!isValidEmail(form.email)) {
      newErrors.email = "Invalid email format";
      valid = false;
    }
    // Add other validation rules for other fields as needed
    setErrors(newErrors);
    return valid;
  };
  // Function to check email validity
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <>
    <form
      ref={formRef}
      className="mt-12 flex flex-col gap-8  "
      onSubmit={handleSubmit}
    >
      <InputField
        type="text"
        name="name"
        value={form.name}
        placeholder="What's your good name?"
        onChange={handleChange}
        label="Your Name"
      />
      {errors.name && <div className="text-red-500	">{errors.name}</div>}
      <InputField
        type="email"
        name="email"
        value={form.email}
        placeholder="What's your web address?"
        onChange={handleChange}
        label="Your Email"
      />
      {errors.email && <span className="text-red-500	">{errors.email}</span>}
      <label className="flex flex-col">
        <span className="text-white font-medium mb-4">Your Message</span>
        <textarea
          rows={5}
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="What you want to say?"
          className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
        />

      </label>
      {errors.message && <span className="text-red-500	">{errors.message}</span>}
      <button
        type="submit"
        className="bg-tertiary py-3 px-8 rounded-xl outline-none   text-white font-bold shadow-md shadow-primary w-full"
      >
        {loading ? "Sending..." : "Send"}
      </button>
 
    </form>
 </>
  );
}

export default ContactForm;

 