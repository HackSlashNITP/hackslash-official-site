'use client'
import React, { useEffect } from "react";

const FormComponent = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    // console.log(process.env.FORM_API_KEY);
    
    formData.append("access_key", "db4cb54c-6ef3-4acd-9aae-fe5c892b0ab4"); // hardcoded for now

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  useEffect(() => {
    if (result != "") {
      alert(result);
    }
  }, [result]);

  return (
    <form className="space-y-5 my-10" onSubmit={onSubmit}>
      <div>
        <label htmlFor="name" className="block mb-2 text-lg">
          Name
        </label>
        <input
          name="name"
          type="text"
          id="name"
          className="w-full px-4 py-2 bg-transparent border border-[#ffffff] rounded-md text-white focus:outline-none ]"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block mb-2 text-lg">
          Email
        </label>
        <input
          name="email"
          type="email"
          id="email"
          className="w-full px-4 py-2 bg-transparent border border-[#ffffff] rounded-md text-white focus:outline-none "
          placeholder="Your email"
        />
      </div>
      <div>
        <label htmlFor="message" className="block mb-2 text-lg">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          rows="4"
          className="w-full px-4 py-2 bg-transparent border border-[#ffffff] rounded-md text-white focus:outline-none "
          placeholder="Your message"
        />
      </div>

      <button
        type="submit"
        className="w-full px-4 py-2 bg-[#00FFC3] text-black rounded-md font-semibold hover:bg-[#00cc7d] transition"
      >
        Submit
      </button>
    </form>
  );
};

export default FormComponent;
