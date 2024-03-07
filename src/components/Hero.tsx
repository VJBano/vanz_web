
import { motion } from 'framer-motion';

import { styles } from '../styles';

import { vincent, bwmap, worldmap } from '../assets';

import { LazyLoadImage } from "react-lazy-load-image-component";

const Hero = () => {
  return (
    <>
        <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">

        <LazyLoadImage src={bwmap}
        // width={600} height={400}
        
        alt="world map"
          className="w-full h-full sm:block hidden object-cover"
      />

        {/* <img
          src={bwmap}
          alt="world map"
          className="w-full h-full sm:block hidden object-cover"
        /> */}
      </div>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
      <LazyLoadImage src={worldmap}
        alt="world map"
          className="w-full h-full sm:hidden block object-cover"
      />
        {/* <img
          src={worldmap}
          alt="world map"
          className="w-full h-full sm:hidden block object-cover"
        /> */}
      </div>
      <section
        className="relative flex sm:flex-row flex-col w-full h-screen mx-auto 
        sm:bg-hero bg-hero-mobile overflow-hidden">
        <div
          className={`absolute inset-0 sm:top-[250px] top-[150px] 
          lg:top-[150px] xl:top-[250px] ${styles.paddingX} 
          max-w-7xl mx-auto flex flex-row items-start
          justify-between gap-3`}>
          <div className="flex flex-col justify-center items-center mt-5 ml-3">
            <div className="w-5 h-5 rounded-full bg-[#0a0a0a] sm:hidden" />
            <div className="w-1 sm:h-80 h-40 bw-gradient sm:hidden" />
          </div>

          <div>
            <h1
              className={`${styles.heroHeadText} text-eerieBlack font-poppins uppercase flex flex-col `}>
              Hi, I'm{' '}
              <span
                className="sm:text-battleGray sm:text-[90px] 
                text-eerieBlack text-[50px] font-mova
                font-extrabold uppercase ">
                Vincent Jay
              </span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-eerieBlack`}>
              FullStack Web Developer. <br className="sm:block hidden" />
              
            </p>
          </div>
          

          
        </div>

        <div
          className="absolute xs:bottom-10 bottom-32 w-full 
          flex justify-center items-center">
          <a href="#about">
            {/* <div
              className="w-[35px] h-[64px] rounded-3xl border-4 
             border-dim flex
            justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className="w-3 h-3 rounded-full bg-taupe mb-1"
              />
            </div> */}

<svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" fill="white"/><g><circle cx="4" cy="12" r="3" fill="white"/><circle cx="20" cy="12" r="3" fill="white"/><animateTransform attributeName="transform" calcMode="spline" dur="1.3s" keySplines=".36,.6,.31,1;.36,.6,.31,1" repeatCount="indefinite" type="rotate" values="0 12 12;180 12 12;360 12 12"/></g></svg>
          </a>
        </div>

        {/* Your image comes here. Feel free to remove image if you don't plan to have one.*/}
        <div>

        <LazyLoadImage src={vincent}
        // width={600} height={400}
        alt="vincent"
        className="absolute bottom-0 ml-[50vw] 
        lg:ml-[65vw] md:ml-[60vw] xmd:ml-[50vw] 2xl:ml-[73vw]
        sm:h-[0vh] md:h-[70vh] xl:h-[80vh]"
      />
          {/* <img
            className="absolute bottom-0 ml-[50vw] 
            lg:ml-[65vw] md:ml-[60vw] xmd:ml-[50vw] 2xl:ml-[73vw]
            sm:h-[0vh] md:h-[70vh] xl:h-[80vh]"
            src={vincent}
            alt="vincent"
          /> */}
        </div>
      </section>
    </>
  )
}

export default Hero