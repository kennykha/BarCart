import React from 'React';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { motion } from 'framer-motion';
import SpiritListItemDescription from './SpiritListItemDescription.jsx';
import LikeDislike from './SpiritListItemLikeDislike.jsx';
import SpiritImage from './SpiritImage.jsx';
import SpiritImageWater from './SpiritImageWater.jsx';
import Loader from './SpiritLoader.jsx';


const SpiritListIngredients = (props) => {
  // console.log('ingredients props', props)
  const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B, #FF8E53)',
      border: 0,
      borderRadius: 15,
      color: 'white',
      padding: '0 30px',
      width: '100%',
      height: '40px',
      cursor: 'pointer',
      letterSpacing: '3px'
    }
  })

  function ButtonStyled() {
    const classes = useStyles();
    return <Button className={classes.root} onClick={(event) => {
      event.stopPropagation();
      props.GetDrink();
    }}>What are you having?</Button>
  }

  if (props.currentSpirit === props.spiritComponent) {
    // console.log('ingredient check', props.currentSpirit === props.spiritComponent)
    const drinkImg = props.drinkState.drinkImg
    return (
      <SpiritIngredients>
        <ButtonStyled />
        {/* Left Container */}
        {/* <div style={{width:'49.8%', height:'90%', border:'1px solid white', display:'flex', borderRadius:'30px'}}>
        <Loader drinkState={props.drinkState}/>
          <SpiritImage drinkState={props.drinkState} />
        </div> */}
        {/* Right container */}
        <div style={{width:'70%', height:'90%', border:'2px solid white', display:'flex', flexWrap:'wrap', borderRadius:'30px'}}>
        {/* <Loader drinkState={props.drinkState}/> */}
        {/* <SpiritImageWater drinkState={props.drinkState} /> */}
          <SpiritListItemDescription drinkState={props.drinkState}/>
          {/* <LikeDislike drinkState={props.drinkState} GetDrink={props.GetDrink}/> */}
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
  justify-content: center;
  flex-wrap:wrap;
  align-items: center;
  /* align-self: center; */
  width: 100%;
  height: 85%;
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