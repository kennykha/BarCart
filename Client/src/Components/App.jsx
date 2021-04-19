import React, { component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Button } from '@material-ui/core';
import styled from 'styled-components';
import SpiritList from './Spirits/SpiritList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedSpirit: "",
      drinkImg: "",
      drinkDescription: "",
      drinkObj: "",
      appName: "BarCart",
      buttonClicked: false
    }
    this.SelectSpirit = this.SelectSpirit.bind(this);
    this.GetDrink = this.GetDrink.bind(this);
  }

  SelectSpirit(e) {
    const stateCheck = this.state.selectedSpirit;
    if (e.target.innerText === stateCheck) {
      this.setState({
        selectedSpirit: "",
        drinkImg: "",
        drinkObj: "",
        appName: "BarCart",
        buttonClicked: false
      })
    } else {
      this.setState({
        selectedSpirit : e.target.innerText,
        drinkImg: "",
        drinkObj: "",
        appName: "",
        buttonClicked: false
      })
    }
  }

  GetDrink() {
    this.setState({
      buttonClicked: true
    });

    if (this.state.selectedSpirit === 'NON-ALCOHOLIC') {
      this.setState({
        drinkImg: "https://bit.ly/387IrZ4",
        buttonClicked: true
      })
    } else {
      axios.get('/drinks', {params:{current:`${this.state.selectedSpirit}`}})
        .then((success) => {
          const drinkObj = {
            drinkName: success.data.strDrink,
            drinkIngredients: [],
            drinkMeasures: [],
            drinkInstruction: success.data.strInstructions,
          }

          for (var key in success.data) {
            if (key.includes('Ingredient') && (success.data[`${key}`] !== null)) {
              drinkObj.drinkIngredients.push(success.data[`${key}`])
            }

            if (key.includes('Measure') && (success.data[`${key}`] !== null)) {
              drinkObj.drinkMeasures.push(success.data[`${key}`])
            }
          }
          this.setState({
            drinkImg: success.data.strDrinkThumb,
            drinkDescription: success.data,
            drinkObj: drinkObj,
          })
        })
        .catch((err) => console.log(err))
    }
  }

  render() {
    return (
      <div>
        <SpiritList
          SelectSpirit={this.SelectSpirit}
          currentSpirit={this.state.selectedSpirit}
          drinkState={this.state}
          GetDrink={this.GetDrink}/>
          <motion.div
            initial={{opacity: 0}}
            transition={{ duration: .5}}
            animate={{fontSize:'100px', color:'white', textDecoration:'underline', letterSpacing:'30px', textAlign:'center', y: 100, opacity: 1}}>
            {this.state.appName}
          </motion.div>
      </div>
    )
  }
}

export default App;
