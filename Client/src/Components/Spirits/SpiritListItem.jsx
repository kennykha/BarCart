import React from 'React';
import styled from 'styled-components';
import SpiritListIngredients from './SpiritListIngredients.jsx';
import { motion } from 'framer-motion';

const SpiritListItem = (props) => {
  // console.log(Object.keys(props.spirit)[0])
  const spiritName = Object.keys(props.spirit)[0];

  return (
    <Spirit
      className={spiritName}
      values={props}
    >
      <motion.div
        whileHover={{scale:1.5}}
        style={{width:'100%', textAlign:'center'}}
      >
        <div onClick={(e) => props.SelectSpirit(e)}>{spiritName}</div>
      </motion.div>
      <SpiritListIngredients
        currentSpirit={props.currentSpirit}
        spiritComponent={Object.keys(props.spirit)[0]}
        drinkState={props.drinkState}
        GetDrink={props.GetDrink}/>
    </Spirit>
  )
}

export default SpiritListItem;

const Spirit = styled.div`
  display: flex;
  color: white;
  justify-content: center;
  align-items: ${(props) => {
    let spiritCheck = props.values.currentSpirit ? props.values.currentSpirit : 'null';
    return spiritCheck === props.className ? 'flex-start' : 'center';
  }};
  flex-wrap: wrap;
  background-color: ${(values) => `#${Object.values(values.values.spirit)}`};
  margin: 0;
  letter-spacing: 8px;
  height: ${(props) => {
    let spiritCheck = props.values.currentSpirit ? props.values.currentSpirit : 'null';
    return spiritCheck === props.className ? '1000px' : '40px';
  }};
  cursor: pointer;
  font-size: ${(props) => {
    let spiritCheck = props.values.currentSpirit ? props.values.currentSpirit : 'null';
    return spiritCheck === props.className ? '100px' : '20px';
  }};
  transition: height 0.5s ease-out;
  transition: font-size 0.5s ease;
  /* overflow: hidden; */
`
