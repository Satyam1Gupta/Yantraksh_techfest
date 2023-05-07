import React from "react";

import { motion } from 'framer-motion'
import { textVariant } from "../utils/motion"

import { styles } from '../styles'
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Our Sponsor</p>
      </motion.div>
    <div className="mt-20 flex flex-wrap justify-center text-center gap-5">
      {technologies.map((technology) => {
        return (
          <div className="w-28 h-28 animate-pulse " key={technology.name}>
            <h3 className="text-rose-400 text-[16px] font-semibold">
              {technology.name}
            </h3>
          </div>
        );
      })}
    </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
