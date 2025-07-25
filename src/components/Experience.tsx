/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import resumePDF from "../assets/resume/resume-updated-2023.pdf";

// eslint-disable-next-line react-refresh/only-export-components
const ExperienceCard = ({ experience }: any) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "#eaeaec",
      color: "#292929",
      boxShadow:
        "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    }}
    contentArrowStyle={{
      borderRight: "7px solid  #232631",
    }}
    date={experience.date.toString()}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <LazyLoadImage
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
          loading="lazy"
        />
        {/* <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        /> */}
      </div>
    }
  >
    <div>
      <h3 className="text-jetLight text-[24px] font-bold font-beckman tracking-[2px]">
        {experience.title}
      </h3>
      <p
        className="text-taupe text-[22px] font-semibold font-overcameBold tracking-[1px]"
        style={{ margin: 0 }}
      >
        {experience.company_name}
      </p>
    </div>
  </VerticalTimelineElement>
);

// eslint-disable-next-line react-refresh/only-export-components
const Experience = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  const ResumeDownload = () => {
    alert("To download my resume, contact me first.");
    // const link = document.createElement("a");
    // link.href = resumePDF;
    // link.download = "resume-updated-2023.pdf";
    // link.click();
  };

  return (
    <>
      <motion.div variants={textVariant(0.5)}>
        <p className={`${styles.sectionSubText} sm:pl-16 pl-[2rem]`}>
          What I've done so far
        </p>
        <h2 className={`${styles.sectionHeadText} sm:pl-16 pl-[2rem]`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline className="vertical-timeline-custom-line">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
          <VerticalTimelineElement
            contentStyle={{
              background: "#eaeaec",
              color: "#292929",
              boxShadow:
                "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            contentArrowStyle={{
              borderRight: "7px solid  #232631",
            }}
            iconStyle={{ background: "#333333" }}
            icon={
              <div className="flex justify-center items-center w-full h-full">
                <LazyLoadImage
                  src="https://res.cloudinary.com/dcryg5uws/image/upload/v1751076557/resume_weaelp.png"
                  alt="resume"
                  className="w-[45%] h-[45%] object-contain"
                  loading="lazy"
                />
                {/* <img
                  src={resume}
                  alt="resume"
                  className="w-[45%] h-[45%] object-contain"
                /> */}
              </div>
            }
          >
            <button
              className="live-demo flex justify-between 
              sm:text-[18px] text-[14px] text-timberWolf 
              font-bold font-beckman items-center py-5 pl-3 pr-3 
              whitespace-nowrap gap-1 sm:w-[148px] sm:h-[58px] 
              w-[125px] h-[46px] rounded-[10px] bg-jetLight 
              sm:mt-[22px] mt-[16px] hover:bg-battleGray 
              hover:text-eerieBlack transition duration-[0.2s] 
              ease-in-out"
              onClick={() => ResumeDownload()}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              MY RESUME
              <LazyLoadImage
                src={
                  isHovered
                    ? "https://res.cloudinary.com/dcryg5uws/image/upload/v1751076557/download_hg9a1d.png"
                    : "https://res.cloudinary.com/dcryg5uws/image/upload/v1751076557/downloadHover_dltykj.png"
                }
                alt="download"
                className="download-btn sm:w-[26px] sm:h-[26px] 
                w-[23px] h-[23px] object-contain"
                loading="lazy"
              />
              {/* <img
                src={isHovered ? download : downloadHover}
                alt="download"
                className="download-btn sm:w-[26px] sm:h-[26px] 
                w-[23px] h-[23px] object-contain"
              /> */}
            </button>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper(Experience, "work");
