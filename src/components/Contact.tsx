/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { useState, useRef, SyntheticEvent } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { send, sendHover } from "../assets";
import { LazyLoadImage } from "react-lazy-load-image-component";

// eslint-disable-next-line react-refresh/only-export-components
const Contact = () => {
  const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
  const EMAIL_KEY = import.meta.env.VITE_EMAIL_KEY;

  console.log("Service Key:", EMAIL_KEY);
  const formRef = useRef(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);

    if (form.email == "" || form.message == "" || form.name == "") {
      alert("Provide All Information");
      setLoading(false);
      return;
    }

    // Check if environment variables are loaded
    if (!SERVICE_ID || !TEMPLATE_ID || !EMAIL_KEY) {
      alert("Configuration error. Please try again later.");
      setLoading(false);
      console.error("Missing environment variables:", {
        SERVICE_ID,
        TEMPLATE_ID,
        EMAIL_KEY,
      });
      return;
    }

    emailjs
      .send(
        SERVICE_ID, // Use environment variable
        TEMPLATE_ID, // Use environment variable
        {
          from_name: form.name,
          to_name: "Vincent Jay Bano",
          from_email: form.email,
          to_email: "vincentjaybano45@gmail.com",
          message: form.message,
        },
        EMAIL_KEY // Use environment variable
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className="-mt-[8rem] xl:flex-row flex-col-reverse 
      flex gap-5 overflow-hidden"
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[100] bg-jet p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadTextLight}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col gap-6 font-poppins"
        >
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-eerieBlack py-4 px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-eerieBlack py-4 px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">
              Your Message
            </span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What's your message?"
              className="bg-eerieBlack py-4 px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium resize-none"
            />
          </label>

          <button
            type="submit"
            className="live-demo flex justify-center sm:gap-4 
            gap-3 sm:text-[20px] text-[16px] text-timberWolf 
            font-bold font-beckman items-center py-5
            whitespace-nowrap sm:w-[130px] sm:h-[50px] 
            w-[100px] h-[45px] rounded-[10px] bg-night 
            hover:bg-battleGray hover:text-eerieBlack 
            transition duration-[0.2s] ease-in-out"
            // onMouseOver={() => {
            //      document
            //     .querySelector('.contact-btn')
            //     .setAttribute('src', sendHover);

            // }}
            // onMouseOut={() => {
            //   document.querySelector('.contact-btn').setAttribute('src', send);
            // }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            {loading ? "Sending" : "Send"}

            <LazyLoadImage
              src={isHovered ? sendHover : send}
              alt="send"
              className="contact-btn sm:w-[26px] sm:h-[26px] 
                w-[23px] h-[23px] object-contain"
              loading="lazy"
            />
            {/* <img
              src={isHovered ? sendHover : send}
              alt="send"
              className="contact-btn sm:w-[26px] sm:h-[26px] 
              w-[23px] h-[23px] object-contain"
            /> */}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper(Contact, "contact");
