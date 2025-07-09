"use client";
import Image from "next/image";
import StarWhite from "../public/images/starWhite.png";

import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    contactNumber: "",
    appDate: "",
    appTime: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("Form submitted successfully!");
        setFormData({
          firstName: "",
          email: "",
          contactNumber: "",
          appDate: "",
          appTime: "",
        });
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      setMessage("Error submitting form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {message && (
        <div
          className={`mb-4 p-3 text-center ${
            message.includes("success")
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {message}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            placeholder="First Name"
            className="border-1 border-[#0D281A] rounded-lg px-5 py-3 w-full"
          />
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Email"
            className="border-1 border-[#0D281A] rounded-lg px-5 py-3 w-full"
          />
          <input
            type="text"
            id="contactNumber"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            required
            placeholder="Contact Number"
            className="border-1 border-[#0D281A] rounded-lg px-5 py-3 w-full"
          />
          <input
            type="date"
            id="appDate"
            name="appDate"
            value={formData.appDate}
            onChange={handleChange}
            required
            placeholder="Preferred Appointment Date"
            className="border-1 border-[#0D281A] rounded-lg px-5 py-3 w-full"
          />
          <input
            type="time"
            id="appTime"
            name="appTime"
            value={formData.appTime}
            onChange={handleChange}
            required
            placeholder="Preferred Appointment Time"
            className="border-1 border-[#0D281A] rounded-lg px-5 py-3 w-full"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-[175px] flex py-2 rounded-lg items-center justify-center gap-2 bg-[#3D5348] text-white"
          >
            {isSubmitting ? "Submitting..." : "Submit Form"}
            {/* <Image src={StarWhite} alt="start" width={15} height={15} />
            <p>Submit Now</p>
            <Image src={StarWhite} alt="start" width={15} height={15} /> */}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
