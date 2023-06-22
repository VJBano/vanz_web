/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }:any) => {
    return (
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card">
        <div
        //   options={{
        //     max: 45,
        //     scale: 1,
        //     speed: 450,
        //   }}
          className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
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
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
        "Difficult Roads Lead to Beautiful Destinations".

            Hi! I'm Vincent Jay Bano, a Software Developer.
        I graduated in Bohol Island State University - Candijay Campus with a degree of Bachelor of Science in Computer Science. 
        I love facing challenging things or problems and finding a simple yet beautiful solution on it. 
        And with that, I can't deny that I enjoy programming and coding wether it could be JavaScript, Go, PHP and more.

                I believe that every problem has it's solution that comes with a nice result. 
            That's why I embraced in becoming a programmer and an efficient Junior Software Engineer, with the trainings and experiences that I undergone, 
            undergoing and will undergo. Though programmers seem like introvert people but I am not. And I am looking forward to get along and work with you!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(About, "about");