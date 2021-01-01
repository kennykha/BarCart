import React from 'react';

const SpiritImage = (props) => {
  const drinkImg = props.drinkState.drinkImg

  if(props.drinkState.drinkImg) {
    return (
      <img
      style={{width:'100%', height:'100%', borderRadius:'30px'}}
      src={drinkImg} />
    )
  } else {
    return null;
  }
}

export default SpiritImage;