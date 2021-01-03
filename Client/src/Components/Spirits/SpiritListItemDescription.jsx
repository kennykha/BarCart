import React from 'react';
import styled from 'styled-components';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { motion } from 'framer-motion';

const SpiritListItemDescription = (props) => {
  console.log(props)

  const CheckboxMake = (ingredient) => {
    const [checked, setChecked] = React.useState(false)
    return (
      <FormControlLabel
        onClick={(e) => e.stopPropagation()}
        control={<Checkbox
          onClick={(e) => e.stopPropagation()}
          onChange={(e) => setChecked(e.target.checked)}
          checked={checked}
          color='primary'
        />}
        label={ingredient.ingredient}
      />
    )
  }

  if (props.drinkState.drinkObj) {
    const drinkDesc = props.drinkState.drinkObj;
    // let measures = "";
    // props.drinkState.drinkObj.drinkMeasures.forEach(measure => measures+= measure + ' | ');
    // console.log(ingredients, measures)
    return (
      <motion.div initial={{opacity: 0}} transition={{duration: .8}} animate={{opacity: 1, marginTop:'15px'}}>
        <DrinkDescription>
          <div style={{textDecoration: 'underline'}}>
            Drink Name
          </div>
          <div style={{fontSize: '2rem'}}>
            {drinkDesc.drinkName}
          </div>
        </DrinkDescription>
        <DrinkDescription><div style={{textDecoration: 'underline'}}>Instructions</div>
           <div style={{fontSize:'1.3rem'}}>{drinkDesc.drinkInstruction}</div></DrinkDescription>
        {/* <DrinkDescription>Ingredients: {ingredients}</DrinkDescription> */}
        <DrinkDescription><div style={{textDecoration: 'underline'}}>Ingredients</div>
          {drinkDesc.drinkIngredients.map((ingredient) => {
            return (
              <CheckboxMake ingredient={ingredient}/>
            )
          })}
        </DrinkDescription>
        <DrinkDescription><div style={{textDecoration: 'underline'}}>Measurements</div>
        {drinkDesc.drinkMeasures.map((measure) => {
            return (
              <CheckboxMake ingredient={measure}/>
            )
          })}
        </DrinkDescription>
      </motion.div>
    )
  } else {
    return null;
  }
}

export default SpiritListItemDescription;

const DrinkDescription = styled.div`
  font-size: 25px;
  letter-spacing: 1px;
  padding: 10px;
`