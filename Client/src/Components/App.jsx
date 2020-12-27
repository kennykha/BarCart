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
  }

  SelectSpirit(e) {
    // console.log(e.target.innerText)
    this.setState({
      selectedSpirit : e.target.innerText
    })
  }

  render() {
    return (
      <div>
        {/* <Title>BARCART</Title> */}
        {/* <Button variant="contained">What are you having?</Button> */}
        <SpiritList SelectSpirit={this.SelectSpirit} currentSpirit={this.state.selectedSpirit}/>
      </div>
    )
  }
}

export default App;

const Title = styled.h1`
  text-align: center;
`