import React, {useState, useEffect}from 'react';
import axios from 'axios';
import { fetchData } from './api';
import Cards from './components/Cards';
import Header from './components/Header';
import Themap from './components/Themap';
import Darkmode from './components/Darkmode';
import './index.css';



class App extends React.Component {
  
  state = {
    data: {},
  }


  async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState({data: fetchedData});
  }


  render(){
    const { data } = this.state;
    return (
      <>
      <Header />
      <Darkmode />
      <Cards data={data}/>
      <Themap 
      
      />
      </>
    )
  }
}

export default App;