import React from 'react';
import styled from 'styled-components';

const SpiritListItemDescription = (props) => {
  console.log(props)

  if (props.drinkState.drinkObj) {
    const drinkDesc = props.drinkState.drinkObj;
    let ingredients = "";
    props.drinkState.drinkObj.drinkIngredients.forEach(ingredient => ingredients+= ingredient + ' | ');
    let measures = "";
    props.drinkState.drinkObj.drinkMeasures.forEach(measure => measures+= measure + ' | ');
    console.log(ingredients, measures)
    return (
      <div>
        <DrinkDescription>Drink Name: {drinkDesc.drinkName}</DrinkDescription>
        <DrinkDescription>Instructions: {drinkDesc.drinkInstruction}</DrinkDescription>
        <DrinkDescription>Ingredients: {ingredients}</DrinkDescription>
        <DrinkDescription>Measurements: {measures}</DrinkDescription>
      </div>
    )
  } else {
    return null;
  }
}

export default SpiritListItemDescription;

const DrinkDescription = styled.div`
  font-size: 25px;
  letter-spacing: 1px;
`