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
      selectedSpirit: ""
    }
    this.SelectSpirit = this.SelectSpirit.bind(this);
    this.GetDrink = this.GetDrink.bind(this);
  }

  SelectSpirit(e) {
    const stateCheck = this.state.selectedSpirit;
    if (e.target.innerText === stateCheck) {
      this.setState({
        selectedSpirit: ""
      })
    } else {
      this.setState({
        selectedSpirit : e.target.innerText
      })
    }
  }

  GetDrink() {
    // const options = {
    //   method: 'GET',
    //   url: 'https://the-cocktail-db.p.rapidapi.com/filter.php',
    //   params: {i: `${this.state.currentSpirit}`},
    //   headers: {
    //     'x-rapidapi-key': 'b8c833b839msh0c8c011cd1ad1dbp1928dbjsna047b39f62bd',
    //     'x-rapidapi-host': 'the-cocktail-db.p.rapidapi.com'
    //   }
    // }
    console.log(this.state.selectedSpirit)
    axios.get('/drinks', {params:{current:`${this.state.selectedSpirit}`}})
      .then((success) => console.log('THIS IS SUCCESS', success))
      .catch((err) => console.log(err))
  }

  render() {
    return (
      <div>
        <SpiritList SelectSpirit={this.SelectSpirit} currentSpirit={this.state.selectedSpirit} GetDrink={this.GetDrink}/>
      </div>
    )
  }
}

export default App;

const Title = styled.h1`
  text-align: center;
`