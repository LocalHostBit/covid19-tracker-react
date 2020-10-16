import React, {useState, useEffect}from 'react';
import axios from 'axios';
import { fetchData } from './api';
import Cards from './components/Cards';
import Header from './components/Header';
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
      <Cards data={data}/>
      </>
    )
  }
}

export default App;