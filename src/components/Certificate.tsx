import React, { useState } from "react";
import { certificate } from "../constants";
import { motion } from "framer-motion";

import { fadeIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

import ImageLoader from "./ImageLoader";

const CertificateCard = ({ index, title, img }: any) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleLoad = () => {
    setLoading(false);
  };

  const handleError = () => {
    setLoading(false);
    setError(true);
  };

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      initial="hidden"
      animate="show"
      className="xs:w-[550px] md:w-[550px] w-full card-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-jetLight rounded-[20px] py-5 px-5 min-h-[200px] flex justify-evenly items-center flex-col relative">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <ImageLoader />
          </div>
        )}

        {error && (
          <div className="absolute inset-0 flex items-center justify-center text-red-400">
            Failed to load certificate image
          </div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: loading ? 0 : 1 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full"
        >
          <img
            src={img}
            alt={title}
            className="w-full h-full object-contain"
            loading="lazy"
            onLoad={handleLoad}
            onError={handleError}
          />
        </motion.div>
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
      <p className={styles.sectionHeadText}>My Certificates</p>

      <div className="pt-10 flex justify-center flex-wrap gap-10">
        {certificate.map((cert, i) => (
          <CertificateCard key={cert.title} index={i} {...cert} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Certificate, "certificate");
