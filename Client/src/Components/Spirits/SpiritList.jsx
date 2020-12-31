import React from 'react';
import SpiritListItem from './SpiritListItem.jsx';
import styled from 'styled-components';

const SpiritList = (props) => {
  const colors = ['F5B58C', 'FE8A41', 'EF6868', 'C39CE1', '56D4F0', 'B5E9BA']
  const spirits = [{'GIN':'F5B58C'}, {'RUM':'FE8A41'}, {'VODKA':'EF6868'}, {'WHISKEY':'C39CE1'}, {'TEQUILA':'56D4F0'}, {'NON-ALCOHOLIC':'B5E9BA'}]
  // console.log('SPIRIT LIST', props)
  return (
    <div>
      {spirits.map((spirit) => (
        <SpiritListItem
          spirit={spirit}
          SelectSpirit={props.SelectSpirit}
          currentSpirit={props.currentSpirit}
          drinkState={props.drinkState}
          GetDrink={props.GetDrink}/>
      ))}
    </div>
  )
}

export default SpiritList;

