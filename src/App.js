import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header";
import {Footer} from "./MyComponents/Footer";
import {Login} from "./MyComponents/Login";
import React from 'react';



class App extends React.Component{
  render(){

 

  return (
    <>
      <Header 
      title="LOGIN UI"/>
      <Login/>
      <Footer/>
    </>
  );
}
}
export default App;
