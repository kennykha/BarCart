import React from 'react';
import { motion } from 'framer-motion';

const SpiritImage = (props) => {
  const drinkImg = props.drinkState.drinkImg

  if(props.drinkState.drinkImg) {
    return (
      <motion.img
      initial={{opacity: 0}}
      transition={{duration: 1}}
      animate={{opacity: 1}}
      style={{width:'100%', height:'100%', borderRadius:'30px'}}
      src={drinkImg} />
    )
  } else {
    return null;
  }
}

export default SpiritImage;