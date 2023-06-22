/* eslint-disable @typescript-eslint/no-explicit-any */

import { motion } from 'framer-motion';
import { styles } from '../styles';
import { staggerContainer } from '../utils/motion';


const SectionWrapper = (Component:any, name:any) => {

    function HOC() {
        return (
            <motion.section
        variants={staggerContainer(0.1, 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
        <span className="hash-span" id={name}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
          )
    }

    return HOC;
  
}

export default SectionWrapper