import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'; 
import axios from 'axios';
import { fetchData } from './api';
import Cards from './components/Cards';
import Header from './components/Header';
import Themap from './components/Themap';
import Darkmode from './components/Darkmode';
import Button from './components/Button';
import Recomended from './components/Recomended';
import Search from './components/Search';
import './index.css';

import Container from 'react-bootstrap/Container'


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
      <Router>
        <Header />
        <Darkmode />
        <Cards data={data}/>
        <Container fluid>
        <Search />
        </Container>
        <br/>
        <Switch>
          <Route path="/map">
            <Themap 
            
            />
          </Route>
        </Switch>
      <Button />
      <Recomended />
      </Router>
      </>
    )
  }
}

export default App;