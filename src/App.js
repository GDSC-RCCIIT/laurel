import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header";
import {Footer} from "./MyComponents/Footer";
import {Login} from "./MyComponents/fp";
import React from 'react';



class App extends React.Component{
  render(){

 

  return (
    <>
      <Header 
      title="FP UI"/>
      <Login/>
      <Footer/>
    </>
  );
}
}
export default App;
