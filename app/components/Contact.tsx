"use client";
import { slideIn } from "@/app/utils/motion";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { SectionWrapper } from "./HigherOrderComponents";
import { EarthCanvas } from "./canvas";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_o9h579i",
        "template_iqefklp",
        {
          from_name: form.name,
          to_name: "Dairon Jan Lamprea Rotelo",
          from_email: form.email,
          to_email: "daironjan1996@gmail.com",
          message: form.message,
        },
        "7rOxb5ds5H79r2ndM"
      )
      .then(() => {
        setLoading(false);
        alert(
          "A humble thanks for reaching me out.  I will respond to you as soon as possible."
        );
        setForm({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        setLoading(false);
        alert("Sorry!! Something went wrong!!");
      });
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className="heroSubText">Get in Touch</p>
        <h3 className="heroHeadText">Contact.</h3>
        <div className="mt-6 mb-8 space-y-3">
          <div className="flex items-center gap-3">
            <span className="text-white font-medium">Email:</span>
            <a href="mailto:daironjan1996@gmail.com" className="text-[#915EFF] hover:underline">
              daironjan1996@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-white font-medium">Phone:</span>
            <a href="tel:+639928685433" className="text-[#915EFF] hover:underline">
              +63 992 868 5433
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-white font-medium">Location:</span>
            <span className="text-secondary">Iloilo, Philippines</span>
          </div>
        </div>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name.</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Whats's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email.</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Whats's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message.</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Sending..." : "Sent"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
