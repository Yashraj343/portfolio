import React from "react";
// import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import {visit} from "../assets";
import { SectionWrapper } from "../hoc";
// import { fadeIn, textVariant } from "../utils/motion";
import { textVariant, fadeIn } from "./../utils/motion";

const ServiceCard = ({ index, title, icon , link}) => {
  console.log(title);
  return(
    
//   <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
        {/* <a href={link}> < img src={visit} className = "w-8 h-8 bg-cyan-100 " /> </a>
         */}
         <a href={link} target="_blank" rel="noopener noreferrer">
  <img src={visit} className="w-8 h-8 bg-cyan-100" />
</a>

      </div>
    </motion.div>
//   </Tilt>
  )
      }  

// );

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a skilled software developer with experience in Web Development & Coding. Let's work together to bring your ideas to life! When I'm not coding, you can find me playing football and cricket with friends, scribbling on paper to explore my creativity, hiking in the mountains, or experimenting with new recipes in the kitchen
      </motion.p>

      {/* <div className='mt-20 flex flex-wrap justify-center' style={{ gap: "30px" }}>
  {services.map((service, index) => (
    <div key={service.title} style={{ width: "50%", marginBottom: "20px" }}>
      <ServiceCard index={index} {...service} />
    </div>
  ))}
</div> */}


<div className='mt-20 flex flex-wrap gap-10 justify-center'>
  <div style={{display: "flex", flexWrap: "wrap"}}>
    {services.map((service, index) => (
      <div key={service.title} style={{width: "50%", marginBottom: "20px"}}>
        <ServiceCard  index={index} {...service} />
      </div>
    ))}
  </div>
</div>

      {/* <div className='mt-20 flex flex-wrap gap-40 '>
          {services.map((service,index)=>(
            <ServiceCard key={service.title} index={index} {...service}/>
          ))}
      </div> */}


    </>
  );
};

export default SectionWrapper(About, "about");
// export default About;

