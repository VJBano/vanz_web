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
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px] font-RobotoRegular">
          <p> <strong>"Difficult Roads Lead to Beautiful Destinations".</strong> </p>
       

          <p className='ml-5'>Hello! I'm Vincent Jay Bano, a dedicated FullStack Web Developer. </p> 
          I proudly hold a degree in Bachelor of Science in Computer Science from Bohol Island State University - Candijay Campus. I find joy in taking on challenging problems and uncovering simple yet elegant solutions. Programming and coding are not just tasks for me; they are a passion. Whether it's JavaScript, Go, PHP, TypeScript, or more, I enjoy the art of turning code into functional and beautiful solutions.

My belief is simple: every problem has a solution, and it's often accompanied by a satisfying result. 
This belief has driven me to embrace the role of a programmer and strive to be an efficient FullStack Web Developer. 
My journey includes a blend of training and hands-on experiences, both past and ongoing, that continually shape my skills.

In addition to my proficiency in JavaScript, Go, and PHP, I have a strong command of TypeScript, enriching my ability to build robust and scalable applications. 
Docker is another tool in my arsenal, enabling me to streamline deployment processes and enhance software scalability. 
When it comes to databases, I am well-versed in managing and optimizing both MySQL and PostgreSQL.

Despite the stereotype of programmers being introverts, I break that mold. 
I am enthusiastic about building connections, collaborating with like-minded individuals, and contributing to a dynamic work environment.
 I look forward to getting along and working with you!
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