import React, { useState } from "react";

function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "8f807c9c-6d30-4f70-8a5c-68540e23c677");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        setResult(`Error: ${data.message}`);
      }
    } catch (error) {
      setResult("An error occurred while submitting the form.");
      console.error(error);
    }
  };

  return (
    <section id="contact" className="py-20 bg-teal-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <form onSubmit={onSubmit} className="space-y-4 max-w-md mx-auto">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full p-3 border rounded-md"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-3 border rounded-md"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            className="w-full p-3 border rounded-md"
            rows="5"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600"
          >
            Send
          </button>
          {result && (
            <p className="mt-4 text-sm font-medium text-gray-700">{result}</p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
