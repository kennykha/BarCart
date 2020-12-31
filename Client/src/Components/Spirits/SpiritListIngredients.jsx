import React from 'React';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import SpiritListItemDescription from './SpiritListItemDescription.jsx';

const SpiritListIngredients = (props) => {
  // console.log('ingredients props', props)
  const ingredients = ['Lime', 'Orange', 'Bitters', 'Cream', 'Salt', 'Lime', 'Orange', 'Bitters', 'Cream', 'Salt', 'Lime', 'Orange', 'Bitters', 'Cream', 'Salt']
  if (props.currentSpirit === props.spiritComponent) {
    // console.log('ingredient check', props.currentSpirit === props.spiritComponent)
    const drinkImg = props.drinkState.drinkImg
    return (
      <SpiritIngredients>
        <Button
          onClick={(event) => {
            event.stopPropagation();
            props.GetDrink();
          }}
          style={{justifyContent:'flexStart', width:'100%'}}
          variant='contained'
        >
          What are you having?
        </Button>
        {/* Left Container */}
        <div style={{width:'49.8%', height:'90%', border:'1px solid black', display:'flex'}}>
          <img
            style={{width:'100%', height:'100%'}}
            src={drinkImg} />
        </div>
        {/* Right container */}
        <div style={{width:'49.8%', height:'90%', border:'1px solid black'}}>
          <SpiritListItemDescription drinkState={props.drinkState}/>
        </div>
      </SpiritIngredients>
    )
  } else {
    return (
      null
    )
  }
}

export default SpiritListIngredients;

const SpiritIngredients = styled.div`
  display: flex;
  /* justify-content: center; */
  flex-wrap:wrap;
  align-items: center;
  /* align-self: center; */
  width: 100%;
  height: 80%;
  /* margin-right: 1000px; */

`

// For ingredient Buttons--------------------------------------->
{/* {ingredients.map((ingredient) => (
  <Button
    style={{flexWrap: 'wrap'}}
    onClick={(event) => event.stopPropagation()}
    variant="contained"
    color="default"
  >
    {ingredient}
  </Button>
))} */}
{/* <Button style={{marginTop: '500px', marginRight:'200px'}} variant='contained'>What are you having?</Button> */}