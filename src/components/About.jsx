import React from "react";
import { motion } from "framer-motion";
import { Tilt } from 'react-tilt'
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from '../hoc'

const ServiceCard =({index,title,icon}) =>{
  return(
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right","spring",0.5 * index,0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div
          options={{max:45,scale:1,speed:450}} className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
            <img src={icon} alt={title} className="w-16  h-16 object-contain"/>
            <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>     
      <motion.p variants={fadeIn("","",0.1,1)} className="mt-5 text-secondary text-[17px] max-w-3xl leading-[30px]">
      I'm a highly skilled software developer with extensive experience in TypeScript, JavaScript, and expertise in a wide range of technologies. My proficiency extends to .NET, Angular, microservices, and InsurePackage, as well as working on Pebbles sites. With a proven track record, I have collaborated closely with clients across various industries to deliver outstanding solutions that stand out for their efficiency, scalability, and user-friendliness.

My commitment to staying updated with the latest industry trends ensures that I am always equipped to tackle complex challenges and bring innovative ideas to life. I thrive in dynamic environments, constantly learning and adapting to new technologies and methodologies to provide the best possible solutions for my clients.

Let's work together to turn your visionary ideas into practical, cutting-edge software solutions that drive success and growth for your projects. I'm eager to take on new challenges and contribute my expertise to help your ideas reach their full potential.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10"> {services.map((service,index)=>(<ServiceCard key={service.title} index={index}{...service}/>))}</div>
    </>
  );
};

export default SectionWrapper(About,"about")