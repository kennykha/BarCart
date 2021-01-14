import React from 'react';
import SpiritListItem from './SpiritListItem.jsx';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SpiritList = (props) => {
  const colors = ['F5B58C', 'F5CD5E', 'EF6868', 'C39CE1', '56D4F0', 'B5E9BA']
  // const spirits = [{'GIN':'F5B58C'}, {'RUM':'e9a682'}, {'VODKA':'ec9c9c'}, {'WHISKEY':'b5badd'}, {'TEQUILA':'6dd6ee'}, {'NON-ALCOHOLIC':'B5E9BA'}]
  const spirits = [{'GIN':'F5B58C'}, {'RUM':'e9a682'}, {'VODKA':'ec9c9c'}, {'WHISKEY':'b5badd'}, {'TEQUILA':'6dd6ee'}]
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

const test = styled.div`
  color: #ec9c9c;
`

