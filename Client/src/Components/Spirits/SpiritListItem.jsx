import React from 'React';
import styled from 'styled-components';

const SpiritListItem = (props) => {
  // console.log(props)
  const spiritName = Object.keys(props.spirit)[0];
  // console.log(props.currentSpirit);
  // console.log(Object.keys(props.spirit)[0])
  return (
  <Spirit onClick={(e) => props.SelectSpirit(e)} values={props}>{spiritName}</Spirit>
  )
}

export default SpiritListItem;

const Spirit = styled.h2`
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
  background-color: ${(values) => `#${Object.values(values.values.spirit)}`};
  margin: 0;
  letter-spacing: 8px;
  /* Switch to flexbox for adjusting height later */
  height: ${(props) => {
    let spiritCheck = props.values.currentSpirit ? props.values.currentSpirit : 'null';
    return spiritCheck === props.children ? '1000px' : '50px';
  }};
  cursor: pointer;
`