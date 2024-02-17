import React from "react";
import { certificate } from "../constants";
import { motion } from "framer-motion";

import { fadeIn,textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

const CertificateCard = ({ index, title, img }: any) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="xs:w-[550px] md:w-[550px] w-full card-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-jetLight  rounded-[20px] py-5 px-5 min-h-[200px] flex justify-evenly items-center flex-col">
        <img src={img} alt={title} className="w-full h-full object-contain" />
      </div>
    </motion.div>
  );
};
{
  /* <CertificateCard key={service} index={index} {...service} /> */
}
const Certificate = () => {
  return (

    <div className="-mt-[6rem]">
      <motion.div variants={textVariant(0.5)}>
        <p className={styles.sectionHeadText}>My Certificates</p>
        
      </motion.div>

      <div className="pt-20 flex justify-center flex-wrap gap-10">
      {certificate.map((cert, i) => (
        <CertificateCard key={cert.title} index={i} {...cert} />
      ))}
    </div>
    </div>

    
  );
};

export default SectionWrapper(Certificate, "certificate");
