/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useState } from "react";
import ImageLoader from "./ImageLoader";

const ServiceCard = ({ index, title, icon }: any) => {

  const [loading, setLoading] = useState(true);
  
  const handleLoad = () => {
    setLoading(false);
  };
  
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        {/* <img src={icon} alt={title} className="w-16 h-16 object-contain" /> */}
        {loading && <ImageLoader />}
        <LazyLoadImage
          src={icon}
          alt={title}
          className="w-16 h-16 object-contain"
          loading="lazy"
          onLoad={handleLoad}
        />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant(0.5)}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px] font-RobotoRegular flex flex-col"
      >
        Hello! I'm Vincent Jay Bano, a dedicated FullStack Web Developer. I
        proudly hold a degree in Bachelor of Science in Computer Science from
        Bohol Island State University - Candijay Campus. I find joy in taking on
        challenging problems and uncovering simple yet elegant solutions.
        Programming and coding are not just tasks for me; they are a passion.
        Whether it's JavaScript, Go, PHP, TypeScript, or more, I enjoy the art
        of turning code into functional and beautiful solutions. My belief is
        simple: every problem has a solution, and it's often accompanied by a
        satisfying result. This belief has driven me to embrace the role of a
        programmer and strive to be an efficient FullStack Web Developer. My
        journey includes a blend of training and hands-on experiences, both past
        and ongoing, that continually shape my skills.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
