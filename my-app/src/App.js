import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Namaste';
import Hey from './components/Hey'
import Message from './components/Subscribe'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick';


class App extends React.Component{
  render(){
    return(
    <div className="App">
    <FunctionClick/>
    <ClassClick/>
      {/*<Counter/>
      <Greet/>
      <Welcome/>*/}
      {/* <Hey name= "bruce" mood="How u?">
        <p>Childreeeeeen prop </p>
      </Hey>
      <Hey name= "Sisimaru" mood="what u doin?">
        <button>Submit</button>
      </Hey>
      <Greet shoes="black" color="yello" />
      <Greet shoes="blue" color="pink" />
      <Greet shoes="white" color="red"/> 
      <Message/>*/}

    </div>
    );
  }
}

export default App;
