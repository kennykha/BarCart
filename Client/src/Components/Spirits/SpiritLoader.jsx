import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const loaderVariants1 = {
  animationOne: {
    y: [0, -30],
    transition: {
      y: {
        yoyo: Infinity,
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  }
}
const loaderVariants2 = {
  animationOne: {
    y: [0, -35],
    transition: {
      y: {
        yoyo: Infinity,
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  }
}

const Loader = (props) => {
  console.log('loader props', props)
  if(props.drinkState.buttonClicked) {
    return (
      <motion.div
        style={{display:'flex', flexWrap:'wrap', position: 'absolute', marginTop: '330px'}}
        initial={{opacity: 1}}
        transition={{duration: 2}}
        animate={{opacity: 0}}
      >
        <motion.div
          style={{
            width: '10px',
            height: '10px',
            margin: '40px auto',
            borderRadius: '50%',
            background: 'white',
            marginLeft: '280px',
            marginRight: '3px'
          }}
          variants={loaderVariants1}
          animate="animationOne"
        >
        </motion.div>
        <motion.div
          style={{
            width: '10px',
            height: '10px',
            margin: '40px auto',
            borderRadius: '50%',
            background: 'white',
            marginRight: '3px'
          }}
          variants={loaderVariants2}
          animate="animationOne"
        >
        </motion.div>
        <motion.div
          style={{
            width: '10px',
            height: '10px',
            margin: '40px auto',
            borderRadius: '50%',
            background: 'white',
            marginRight: '3px'
          }}
          variants={loaderVariants1}
          animate="animationOne"
        >
        </motion.div>
        <motion.div
          style={{
            width: '10px',
            height: '10px',
            margin: '40px auto',
            borderRadius: '50%',
            background: 'white',
            marginRight: '3px'
          }}
          variants={loaderVariants2}
          animate="animationOne"
        >
        </motion.div>
        <motion.div
          style={{
            width: '10px',
            height: '10px',
            margin: '40px auto',
            borderRadius: '50%',
            background: 'white'
          }}
          variants={loaderVariants1}
          animate="animationOne"
        >
        </motion.div>
      </motion.div>
    )
  } else {
    return null;
  }
}

export default Loader;