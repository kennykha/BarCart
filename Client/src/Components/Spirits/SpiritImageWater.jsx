import React from 'react';
import { motion } from 'framer-motion';

const SpiritImageWater = (props) => {
  const drinkImg = props.drinkState.drinkImg

  if(props.drinkState.drinkImg && (props.drinkState.selectedSpirit === 'NON-ALCOHOLIC')) {
    return (
      <motion.img
      initial={{opacity: 0}}
      transition={{duration: 1}}
      animate={{opacity: 1}}
      style={{width:'100%', height:'100%', borderRadius:'30px'}}
      src={"https://memegenerator.net/img/instances/73519683.jpg"} />
    )
  } else {
    return null;
  }
}

export default SpiritImageWater;